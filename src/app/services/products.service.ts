import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/productos';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private API_PRODUCTOS = 'https://app-gym-74b74-default-rtdb.firebaseio.com/';

  getProducts = (): Observable<Producto[]> => {
    return this.http.get<Producto[]>(`${this.API_PRODUCTOS}/productos.json`);
  };
}
