import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SuscripcionesService } from '../../../services/suscripciones.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../../interfaces/cliente';
import { Suscripcion } from '../../../interfaces/suscripcion';

@Component({
  selector: 'app-formulario-suscripcion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-suscripcion.component.html',
  styleUrl: './formulario-suscripcion.component.css',
})
export class FormularioSuscripcionComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    nombre: '',
    email: '',
    cedula: '',
    telefono: '',
    genero: '',
    fechaNacimiento: '',
    direccion: '',
    peso: 0,
    altura: 0,
    imc: 0,
    password: '',
  };
  planSuscripcion: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  mostrarMensaje: boolean = false;
  mensajeExito: string = '';

  planes = [
    {
      id: 'semanal',
      nombre: 'Semanal',
      descripcion: 'Acceso por 7 días',
      precio: 10,
    },
    {
      id: 'mensual',
      nombre: 'Mensual',
      descripcion: 'Acceso por 30 días',
      precio: 30,
    },
  ];

  constructor(
    private suscripcionesService: SuscripcionesService,
    private usuariosService: UsuariosService,
    private router: Router,
    private ruta: ActivatedRoute
  ) {}

  ngOnInit() {
    const clienteId = Number(this.ruta.snapshot.paramMap.get('id'));
    if (clienteId) {
      this.usuariosService.buscarClienteId(clienteId).subscribe({
        next: (cliente) => {
          // Si la fecha viene como string con hora o como Date, conviértela:
          if (cliente.fechaNacimiento) {
            const fecha = new Date(cliente.fechaNacimiento);
            cliente.fechaNacimiento = fecha.toISOString().slice(0, 10);
          }
          this.cliente = cliente;
        },
        error: (err) => console.error('Error al obtener cliente', err),
      });
    }
  }

  onPlanOrFechaInicioChange() {
    if (this.fechaInicio && this.planSuscripcion) {
      const inicio = new Date(this.fechaInicio);
      let fin = new Date(inicio);
      if (this.planSuscripcion === 'semanal') {
        fin.setDate(fin.getDate() + 7);
      } else if (this.planSuscripcion === 'mensual') {
        fin.setDate(fin.getDate() + 30);
      }
      this.fechaFin = fin.toISOString().slice(0, 10);
    } else {
      this.fechaFin = '';
    }
  }

  agregarSuscripcion(formulario: NgForm) {
    if (!this.cliente || !this.cliente.nombre) {
      alert('Cliente no cargado');
      return;
    }

    if (formulario.valid) {
      const planSeleccionado = this.planes.find(
        (p) => p.id === this.planSuscripcion
      );

      const nuevaSuscripcion: Suscripcion = {
        plan: planSeleccionado?.nombre || '',
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin,
        cliente: this.cliente,
      };

      this.suscripcionesService
        .registrarSuscripcion(nuevaSuscripcion)
        .subscribe({
          next: () => {
            alert('suscripcion registrada correctamente');
            this.mensajeExito = `¡Bienvenido ${this.cliente?.nombre}! Tu suscripción ${planSeleccionado?.nombre} ha sido registrada exitosamente.`;
            this.mostrarMensaje = true;
            setTimeout(() => this.cerrarMensaje(), 5000);
          },
          error: (err) => {
            alert('error al registrar la suscripcion');
            console.error('Error al registrar suscripción', err);
            this.mensajeExito =
              'Hubo un error al procesar tu suscripción. Por favor, intenta nuevamente.';
            this.mostrarMensaje = true;
          },
        });
    }
  }

  cerrarMensaje() {
    this.mostrarMensaje = false;
  }
}
