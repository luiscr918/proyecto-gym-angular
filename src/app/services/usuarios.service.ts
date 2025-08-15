import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080/clientes';
  //guardar nuevo cliente
  registrarUsuario(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/guardar`, cliente);
  }
  //cargar todos los clientes
  mostrarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/leer`);
  }
  //Delete
  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }
  //antes de actualizar buscar el Cliente por el id
  buscarClienteId(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrl}/buscar/${id}`);
  }
  //Actualizar
  actualizarCliente(id: number, Cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(
      `${this.apiUrl}/actualizar/${id}`,
      Cliente
    );
  }
  buscarClienteConSuscripciones(id: number): Observable<Cliente> {
  return this.http.get<Cliente>(`${this.apiUrl}/buscarConSuscripciones/${id}`);
}

}
