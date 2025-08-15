import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../components/footer-component/footer-component.component';
import { ServiciosRegistroComponent } from '../../components/servicios-component/servicios-registro/servicios-registro.component';

@Component({
  selector: 'app-servicios-admin-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent, ServiciosRegistroComponent],
  templateUrl: './servicios-admin-page.component.html',
  styleUrl: './servicios-admin-page.component.css'
})
export class ServiciosAdminPageComponent {

}
