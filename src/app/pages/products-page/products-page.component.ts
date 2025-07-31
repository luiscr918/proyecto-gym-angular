import { Component } from '@angular/core';
import { ProductDatailsComponent } from "../../components/product-components/product-datails/product-datails.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponentComponent } from "../../components/footer-component/footer-component.component";

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductDatailsComponent, NavBarComponent, FooterComponentComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

}
