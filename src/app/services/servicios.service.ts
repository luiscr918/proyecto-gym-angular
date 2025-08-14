import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicios } from '../interfaces/servicios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  constructor(private http: HttpClient) { }
  private API_SERVICIO ='http://localhost:8080/servicios'
  //guardar
  postServicio(servicio: Servicios): Observable<Servicios>{
    return this.http.post<Servicios>(`${this.API_SERVICIO}/guardar`, servicio)
  }
  //leer
  getServicio(): Observable<Servicios[]>{
    return this.http.get<Servicios[]>(`${this.API_SERVICIO}/leer`)
  }
  //buscar ID
  buscar(id: number):Observable<Servicios>{
    return this.http.get<Servicios>(`${this.API_SERVICIO}/buscar/${id}`)
  }
  //actualizar
  putServicio(id: number, servicio:Servicios):Observable<Servicios>{
    return this.http.put<Servicios>(`${this.API_SERVICIO}/actualizar/${id}`, servicio)
  }
  //eliminar
  deleteServicio(id:number): Observable<void>{
    return this.http.delete<void>(`${this.API_SERVICIO}/eliminar/${id}`)
  }
}
