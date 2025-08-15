import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../components/footer-component/footer-component.component';
import { ServiciosAdminComponent } from '../../components/servicios-component/servicios-admin/servicios-admin.component';


@Component({
  selector: 'app-servicios-lista',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent, ServiciosAdminComponent],
  templateUrl: './servicios-lista.component.html',
  styleUrl: './servicios-lista.component.css'
})
export class ServiciosListaComponent {

}
