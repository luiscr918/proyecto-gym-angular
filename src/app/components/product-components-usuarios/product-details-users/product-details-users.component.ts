import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from '../../../interfaces/productos';
import { FooterComponentComponent } from '../../footer-component/footer-component.component';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';

@Component({
  selector: 'app-product-details-users',
  standalone: true,
  imports: [FooterComponentComponent, NavBarComponent],
  templateUrl: './product-details-users.component.html',
  styleUrl: './product-details-users.component.css',
})
export class ProductDetailsUsersComponent {
  constructor(
    private servicioProducto: ProductsService,
    private ruta: ActivatedRoute
  ) {}

  producto: Producto & { id: string } = {
    id: '',
    nombre: '',
    categoria: '',
    precio: 0,
    stock: 0,
    unidad: '',
    descripcion: '',
    disponible: false,
    imagen: '',
  };

  ngOnInit(): void {
    this.ruta.params.subscribe((params) => {
      const id = params['id'];
      this.servicioProducto.getProductById(id).subscribe((producto) => {
        if (producto) {
          this.producto = { id, ...producto };
        } else {
          alert('Producto no encontrado con ID:');
        }
      });
    });
  }
}
