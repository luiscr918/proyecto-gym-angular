import { Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticaService {
  private readonly API_URL = 'http://localhost:3000/usuarios';
  private usuarioActualSubject = new BehaviorSubject<Usuarios>(new Usuarios());
  public usuarioActual$ = this.usuarioActualSubject.asObservable();

  constructor(private http: HttpClient) {
    const usuarioGuardado = localStorage.getItem('user');
    if (usuarioGuardado) {
      this.usuarioActualSubject.next(JSON.parse(usuarioGuardado));
    }
  }

  login(correo: string, contrasenia: string): Observable<any> {
    return this.http.get<Usuarios[]>(this.API_URL).pipe(
      map(usuarios => {
        const usuario = usuarios.find(u => u.correo === correo && u.contrasenia === contrasenia);
        if (usuario) {
          localStorage.setItem('user', JSON.stringify(usuario));
          this.usuarioActualSubject.next(usuario);
          return { success: true, user: usuario };
        } else {
          return { success: false, message: 'Credenciales incorrectas' };
        }
      })
    );
  }
   registro(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.API_URL, usuario);
  }

  sesionIniciada(): boolean {
    const usuario = this.usuarioActualSubject.value;
    return !!usuario && !!usuario.correo && !!usuario.contrasenia;
  }

  logout(): void {
    localStorage.removeItem('usuarios');
    this.usuarioActualSubject.next(new Usuarios());
  }

  correoExiste(correo: string): Observable<boolean> {
    return this.http.get<Usuarios[]>(this.API_URL).pipe(
      map(usuarios => usuarios.some(u => u.correo === correo))
    );
  }

  getUsuarioActual(): Usuarios {
    return this.usuarioActualSubject.value;
  }
}
