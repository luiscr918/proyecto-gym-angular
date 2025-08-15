import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../components/footer-component/footer-component.component';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../interfaces/cliente';

@Component({
  selector: 'app-clientes-actualizar',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent, FormsModule],
  templateUrl: './clientes-actualizar.component.html',
  styleUrl: './clientes-actualizar.component.css',
})
export class ClientesActualizarComponent {
  constructor(
    private servicioCliente: UsuariosService,
    private router: Router,
    private ruta: ActivatedRoute
  ) {}
  id: number = 0;
  cliente: Cliente = {
    id: 0,
    nombre: '',
    email: '',
    cedula: '',
    telefono: '',
    genero: '',
    fechaNacimiento: '', // O new Date() si lo manejas como objeto Date
    direccion: '',
    peso: 0,
    altura: 0,
    imc: 0,
    password: '',
  };
  imc: number = 0;
  ngOnInit(): void {
    this.ruta.params.subscribe((params) => {
      this.id = params['id'];
      this.servicioCliente.buscarClienteId(this.id).subscribe({
        next: (data) => {
          this.cliente = data;
          if (data.fechaNacimiento) {
            // Si viene como Date o string con hora, lo formateas:
            const fecha = new Date(data.fechaNacimiento);
            this.cliente.fechaNacimiento = fecha.toISOString().slice(0, 10);
          }
          this.imc = data.peso * (data.altura * data.altura);
        },
        error: (err) => {
          console.log('Error al cargar el cliente', err);
        },
      });
    });
  }
  editarCliente(id: number, cliente: Cliente) {
    cliente.imc = cliente.peso * (cliente.altura * cliente.altura);
    this.servicioCliente.actualizarCliente(id, cliente).subscribe({
      next: () => {
        alert('Cliente actualizado correctamente');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log('Error al actualizar bd', err);
      },
    });
  }
}
