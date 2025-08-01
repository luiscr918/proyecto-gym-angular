import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../interfaces/productos';
import { NavBarComponent } from "../../nav-bar/nav-bar.component";
import { FooterComponentComponent } from "../../footer-component/footer-component.component";

@Component({
  selector: 'app-product-actualizar',
  standalone: true,
  imports: [FormsModule, NavBarComponent, FooterComponentComponent],
  templateUrl: './product-actualizar.component.html',
  styleUrl: './product-actualizar.component.css',
})
export class ProductActualizarComponent {
constructor(
    private servicioProducto: ProductsService,
    private router: Router,
    private ruta: ActivatedRoute
  ) {}
  id:  string= '';
  producto: Producto = { 
    nombre:  '',
  categoria:  '',
  precio:   0,
  stock: 0,
  unidad:  '',
  descripcion:   '',
  disponible:  false,
  imagen:  ''
  };
  ngOnInit(): void {
    this.ruta.params.subscribe((params) => {
      this.id = params['id'];
      this.servicioProducto.getProductById(this.id).subscribe((producto) => {
        this.producto = producto;
      });
    });
  }
  editar(formulario: any): void {
    const clienteActualizado = { ...formulario.value, id: this.id };
    this.servicioProducto
      .actualizarProducto(this.id, clienteActualizado)
      .subscribe(() => {
        this.router.navigate(['/productos']);
      });
  }

}
