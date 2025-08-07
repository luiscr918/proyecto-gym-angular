import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { ProductListComponent } from "../../components/product-components/product-list/product-list.component";
import { FooterComponentComponent } from "../../components/footer-component/footer-component.component";
import { ProductListUsersComponent } from "../../components/product-components-usuarios/product-list-users/product-list-users.component";

@Component({
  selector: 'app-product-page-admin',
  standalone: true,
  imports: [NavBarComponent,  FooterComponentComponent, ProductListUsersComponent],
  templateUrl: './product-page-admin.component.html',
  styleUrl: './product-page-admin.component.css'
})
export class ProductPageAdminComponent {

}
