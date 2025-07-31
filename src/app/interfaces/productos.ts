// Esta interfaz representa un solo producto
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

// Este tipo es para cuando transformamos los productos con su ID
export interface ProductoConId extends Producto {
  id: string;
}