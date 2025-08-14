import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionesService {
  constructor(private http: HttpClient) { }
  
  private API_SUSCRIPCIONES = 'https://app-gym-74b74-default-rtdb.firebaseio.com/';
  
  guardarSuscripcion(suscripcion: any): Observable<any> {
    return this.http.post(`${this.API_SUSCRIPCIONES}/suscripciones.json`, suscripcion);
  }
  
  getSuscripciones(): Observable<any> {
    return this.http.get<any>(`${this.API_SUSCRIPCIONES}/suscripciones.json`);
  }
  
  buscarSuscripcionById(id: string): Observable<any> {
    return this.http.get(`${this.API_SUSCRIPCIONES}/suscripciones/${id}.json`);
  }

  eliminarSuscripcion(id: string): Observable<any> {
    return this.http.delete(`${this.API_SUSCRIPCIONES}/suscripciones/${id}.json`);
  }
  
  editarSuscripcion(id: string, suscripcion: any): Observable<any> {
    return this.http.put(`${this.API_SUSCRIPCIONES}/suscripciones/${id}.json`, suscripcion);
  }
}
