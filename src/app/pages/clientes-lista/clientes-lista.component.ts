import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../components/footer-component/footer-component.component';
import { UsuariosService } from '../../services/usuarios.service';
import { Cliente } from '../../interfaces/cliente';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent,RouterLink],
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css',
})
export class ClientesListaComponent {
  constructor(private servicioCliente: UsuariosService) {}
  clientes: Cliente[] = [];

  ngOnInit() {
    this.servicioCliente.mostrarClientes().subscribe((data) => {
      this.clientes = data;
    });
  }
  eliminar = (id: number) => {
    this.servicioCliente.deleteCliente(id).subscribe({
      next: () => {
        alert('Cliente eliminado correctamente');
        window.location.reload();
      },
      error: (error) => {
        console.log(error);
        alert('Error al eliminar el Cliente');
      },
    });
  };
}
