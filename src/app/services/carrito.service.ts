import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoConId } from '../interfaces/productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
   private APICARRITO='http://localhost:3000/carrito'
  constructor(private http:HttpClient) { }

  agregarCarrito(producto:ProductoConId):Observable<ProductoConId>{
    return this.http.post<ProductoConId>(this.APICARRITO, producto);
  }
  obtenerCarrito=():Observable<ProductoConId[]>=>{
    return this.http.get<ProductoConId[]>(this.APICARRITO);
  }
}
