import { Component } from '@angular/core';
import { NavBarComponent } from "../../nav-bar/nav-bar.component";
import { FooterComponentComponent } from "../../footer-component/footer-component.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
