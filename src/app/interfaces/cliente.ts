import { Suscripcion } from './suscripcion';

export interface Cliente {
  id?: number; // heredado de Usuario
  nombre: string; // heredado de Usuario
  email: string; // heredado de Usuario
  password: string; // heredado de Usuario

  suscripciones?: Suscripcion[]; // relación uno a muchos
  fechaNacimiento: string; // formato "yyyy-mm-dd"
  genero: string;
  cedula: string;
  telefono: string;
  direccion: string;
  peso: number;
  altura: number;
  imc: number;
}
