 
export interface Producto {
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  unidad: string;
  descripcion: string;
  disponible: boolean;
  imagen: string;
}

 
export interface ProductoConId extends Producto {
  id: string;
}