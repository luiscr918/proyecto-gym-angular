import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../components/footer-component/footer-component.component';
import { FormularioSuscripcionComponent } from '../../components/suscripcion-components/formulario-suscripcion/formulario-suscripcion.component';

@Component({
  selector: 'app-suscripcion-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent, FormularioSuscripcionComponent],
  templateUrl: './suscripcion-page.component.html',
  styleUrl: './suscripcion-page.component.css'
})
export class SuscripcionPageComponent {
  constructor() {}
}
