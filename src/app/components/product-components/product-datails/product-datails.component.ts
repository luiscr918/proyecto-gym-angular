import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Producto } from '../../../interfaces/productos';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarComponent } from "../../nav-bar/nav-bar.component";
import { FooterComponentComponent } from "../../footer-component/footer-component.component";

@Component({
  selector: 'app-product-datails',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent],
  templateUrl: './product-datails.component.html',
  styleUrl: './product-datails.component.css',
})
export class ProductDatailsComponent {
  constructor(
    private servicioProducto: ProductsService,
    private router: Router,
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
          console.log('Producto:', this.producto);
        } else {
          console.warn('Producto no encontrado con ID:', id);
        }
      });
    });
  }
}
