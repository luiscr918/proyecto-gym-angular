import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../components/footer-component/footer-component.component';
import { ServiciosRegistroComponent } from '../../components/servicios-component/servicios-registro/servicios-registro.component';
import { ServiciosListaComponent } from '../../components/servicios-component/servicios-lista/servicios-lista.component';
import { ServiciosAdminComponent } from '../../components/servicios-component/servicios-admin/servicios-admin.component';

@Component({
  selector: 'app-servicios-pages',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent, ServiciosRegistroComponent, ServiciosListaComponent, ServiciosAdminComponent],
  templateUrl: './servicios-pages.component.html',
  styleUrl: './servicios-pages.component.css'
})
export class ServiciosPagesComponent {

}
