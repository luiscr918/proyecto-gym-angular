import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Producto, ProductoConId } from '../interfaces/productos';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private API_PRODUCTOS = 'https://app-gym-74b74-default-rtdb.firebaseio.com/';
  //guardar Producto
  guardarProducto = (producto: Producto): Observable<{ name: string }> => {
    return this.http.post<{ name: string }>(
      `${this.API_PRODUCTOS}/productos.json`,
      producto
    );
  };
  //obtener los productos
  getProducts(): Observable<ProductoConId[]> {
    return this.http
      .get<{ [key: string]: Producto }>(`${this.API_PRODUCTOS}/productos.json`)
      .pipe(
        map((data) => {
          if (!data) return [];
          return Object.entries(data).map(([id, producto]) => ({
            id,
            ...producto,
          }));
        })
      );
  }
  //buscar por id el producto
  getProductById(id: string): Observable<Producto> {
    return this.http.get<Producto>(
      `${this.API_PRODUCTOS}/productos/${id}.json`
    );
  }
  //eliminar
  eliminarProducto = (id: string): Observable<any> => {
    return this.http.delete(`${this.API_PRODUCTOS}/productos/${id}.json`);
  };
  //actualizar Producto
  actualizarProducto = (id: string, producto: Producto): Observable<any> => {
    return this.http.put(`${this.API_PRODUCTOS}/clientes/${id}.json`, producto);
  };
}
