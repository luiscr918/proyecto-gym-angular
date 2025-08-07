import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductoConId } from '../../../interfaces/productos';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list-users.component.html',
  styleUrl: './product-list-users.component.css'
})
export class ProductListUsersComponent {
 constructor(private servicioProducto: ProductsService) {}
  productos: ProductoConId[] = [];
  ngOnInit() {
    this.servicioProducto.getProducts().subscribe((data) => {
      this.productos = data;
      console.log('Productos con ID:', this.productos);
    });
  }
  // codigo para animacion de el titulo

  ngAfterViewInit(): void {
    // El código del script se coloca aquí dentro
    const words = [
      'Descubre los productos fitness',
      'Suplementos de alta calidad',
      '¡Entrena al máximo!',
    ];
    let i = 0;
    let j = 0;
    let currentWord = '';
    let isDeleting = false;

    const type = () => {
      currentWord = words[i];
      if (isDeleting) {
        document.getElementById('typewriter')!.textContent =
          currentWord.substring(0, j - 1);
        j--;
        if (j === 0) {
          isDeleting = false;
          i++;
          if (i === words.length) {
            i = 0;
          }
        }
      } else {
        document.getElementById('typewriter')!.textContent =
          currentWord.substring(0, j + 1);
        j++;
        if (j === currentWord.length) {
          isDeleting = true;
        }
      }
      setTimeout(type, 100);
    };

    type();
  }
}
