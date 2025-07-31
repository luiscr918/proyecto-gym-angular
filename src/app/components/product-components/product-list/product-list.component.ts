import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Producto } from '../../../interfaces/productos';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  constructor(private servicioProducto: ProductsService) {}
  productos: Producto[] = [];
  ngOnInit() {
    this.servicioProducto.getProducts().subscribe((data) => {
      this.productos = data; 
      console.log(data);
    });
  }
}
