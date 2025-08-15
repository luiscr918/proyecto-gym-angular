import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../components/footer-component/footer-component.component';
import { ServiciosListaComponent } from '../../components/servicios-component/servicios-lista/servicios-lista.component';

@Component({
  selector: 'app-servicios-pages',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent, ServiciosListaComponent],
  templateUrl: './servicios-pages.component.html',
  styleUrl: './servicios-pages.component.css'
})
export class ServiciosPagesComponent {

}
