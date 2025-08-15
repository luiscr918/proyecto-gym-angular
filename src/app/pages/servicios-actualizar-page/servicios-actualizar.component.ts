import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../components/footer-component/footer-component.component';

@Component({
  selector: 'app-servicios-actualizar',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent, ServiciosActualizarComponent],
  templateUrl: './servicios-actualizar.component.html',
  styleUrl: './servicios-actualizar.component.css'
})
export class ServiciosActualizarComponent {

}
