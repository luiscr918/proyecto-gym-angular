import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../footer-component/footer-component.component';

@Component({
  selector: 'app-registro-producto',
  standalone: true,
  imports: [FormsModule, NavBarComponent, FooterComponentComponent],
  templateUrl: './registro-producto.component.html',
  styleUrl: './registro-producto.component.css',
})
export class RegistroProductoComponent {
  constructor(private productoServicio: ProductsService) {}
  nombre: string = '';
  categoria: string = '';
  precio: number = 0;
  stock: number = 0;
  unidad: string = '';
  descripcion: string = '';
  disponible: boolean = false;
  imagen: string = '';

  agregarProducto(formulario: any) {
    this.productoServicio.guardarProducto(formulario.value).subscribe(() => {
      alert('se guardo correctamente');
      window.location.reload();
    });
  }
}
