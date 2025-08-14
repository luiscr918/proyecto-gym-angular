import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../components/footer-component/footer-component.component';

@Component({
  selector: 'app-servicios-admin',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent, ServiciosAdminComponent],
  templateUrl: './servicios-admin.component.html',
  styleUrl: './servicios-admin.component.css'
})
export class ServiciosAdminComponent {

}
