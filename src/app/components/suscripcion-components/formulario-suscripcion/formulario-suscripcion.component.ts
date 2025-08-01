import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SuscripcionesService } from '../../../services/suscripciones.service';

@Component({
  selector: 'app-formulario-suscripcion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-suscripcion.component.html',
  styleUrl: './formulario-suscripcion.component.css'
})
export class FormularioSuscripcionComponent {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  direccion: string = '';
  fechaNacimiento: string = '';
  genero: string = '';
  planSuscripcion: string = '';
  mostrarMensaje: boolean = false;
  mensajeExito: string = '';

  planes = [
    {
      id: 'basico',
      nombre: 'Plan Básico',
      descripcion: 'Acceso al gimnasio en horario normal',
      precio: 25
    },
    {
      id: 'premium',
      nombre: 'Plan Premium',
      descripcion: 'Acceso completo + clases grupales',
      precio: 45
    },
    {
      id: 'vip',
      nombre: 'Plan VIP',
      descripcion: 'Acceso total + entrenador personal',
      precio: 75
    }
  ];

  constructor(private suscripcionesService: SuscripcionesService) {}

  agregarSuscripcion(formulario: NgForm) {
    if (formulario.valid) {
      const planSeleccionado = this.planes.find(p => p.id === this.planSuscripcion);
      
      const suscripcion = {
        nombre: this.nombre,
        email: this.email,
        telefono: this.telefono,
        direccion: this.direccion,
        fechaNacimiento: this.fechaNacimiento,
        genero: this.genero,
        planSuscripcion: this.planSuscripcion,
        planNombre: planSeleccionado?.nombre || '',
        precio: planSeleccionado?.precio || 0,
        fechaRegistro: new Date().toISOString()
      };

      this.suscripcionesService.guardarSuscripcion(suscripcion).subscribe({
        next: (response: any) => {
          this.mensajeExito = `¡Bienvenido ${this.nombre}! Tu suscripción al ${planSeleccionado?.nombre} ha sido registrada exitosamente.`;
          this.mostrarMensaje = true;
          this.limpiarFormulario();
          
          setTimeout(() => {
            this.cerrarMensaje();
          }, 5000);
        },
        error: (error: any) => {
          console.error('Error al registrar suscripción:', error);
          this.mensajeExito = 'Hubo un error al procesar tu suscripción. Por favor, intenta nuevamente.';
          this.mostrarMensaje = true;
        }
      });
    }
  }

  limpiarFormulario() {
    this.nombre = '';
    this.email = '';
    this.telefono = '';
    this.direccion = '';
    this.fechaNacimiento = '';
    this.genero = '';
    this.planSuscripcion = '';
  }

  cerrarMensaje() {
    this.mostrarMensaje = false;
  }
}
