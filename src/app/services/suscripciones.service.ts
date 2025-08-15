import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suscripcion } from '../interfaces/suscripcion';

@Injectable({
  providedIn: 'root',
})
export class SuscripcionesService {
  constructor(private http: HttpClient) {}

  private API_SUSCRIPCIONES = 'http://localhost:8080/suscripciones';
  //guardar nuevo Suscripcion
  registrarSuscripcion(Suscripcion: Suscripcion): Observable<Suscripcion> {
    return this.http.post<Suscripcion>(
      `${this.API_SUSCRIPCIONES}/guardar`,
      Suscripcion
    );
  }
  //cargar todos los Suscripcions
  mostrarSuscripciones(): Observable<Suscripcion[]> {
    return this.http.get<Suscripcion[]>(`${this.API_SUSCRIPCIONES}/leer`);
  }
  //Delete
  deleteSuscripcion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_SUSCRIPCIONES}/eliminar/${id}`);
  }
  //antes de actualizar buscar el Suscripcion por el id
  buscarSuscripcionId(id: number): Observable<Suscripcion> {
    return this.http.get<Suscripcion>(`${this.API_SUSCRIPCIONES}/buscar/${id}`);
  }
  //Actualizar
  actualizarSuscripcion(
    id: number,
    Suscripcion: Suscripcion
  ): Observable<Suscripcion> {
    return this.http.put<Suscripcion>(
      `${this.API_SUSCRIPCIONES}/actualizar/${id}`,
      Suscripcion
    );
  }
}
