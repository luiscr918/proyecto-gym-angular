import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Usuarios {
  id?: string;
  nombre!: string;
  fechaNacimiento!: string;
  sexo!: string;
  documento!: string;
  telefono!: string;
  correo!: string;
  direccion!: string;
  contrasenia!: string;
  rol: 'admin' | 'cliente' = 'cliente';
}
