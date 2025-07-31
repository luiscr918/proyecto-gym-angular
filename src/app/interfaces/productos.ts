export interface Productos {
  producto:Producto[];
}
export interface Producto{
nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  unidad: string;
  descripcion: string;
  disponible: boolean;
  imagen: string;
}
