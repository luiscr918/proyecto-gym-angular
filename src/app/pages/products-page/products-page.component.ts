import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../components/footer-component/footer-component.component';
import { ProductListComponent } from '../../components/product-components/product-list/product-list.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent, ProductListComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {}
