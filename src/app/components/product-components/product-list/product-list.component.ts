import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import {  ProductoConId } from '../../../interfaces/productos';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  constructor(private servicioProducto: ProductsService) {}
  productos: ProductoConId[] = [];
  ngOnInit() {
    this.servicioProducto.getProducts().subscribe((data) => {
      this.productos = data;
      console.log("Productos con ID:", this.productos);
    });
  }
}
