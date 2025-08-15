import { Cliente } from "./cliente";

export interface Suscripcion {
  id: number;
  plan: string;
  fechaInicio: string; // formato "yyyy-mm-dd"
  fechaFin: string;    // formato "yyyy-mm-dd"
  cliente?: Cliente;   // relación inversa, opcional para evitar ciclos
}