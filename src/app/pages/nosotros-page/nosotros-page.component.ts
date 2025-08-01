import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroNosotrosComponent } from '../../components/nosotros-components/hero-nosotros/hero-nosotros.component';
import { HistoriaComponent } from '../../components/nosotros-components/historia/historia.component';
import { ValoresComponent } from '../../components/nosotros-components/valores/valores.component';
import { EquipoComponent } from '../../components/nosotros-components/equipo/equipo.component';
import { InstalacionesComponent } from '../../components/nosotros-components/instalaciones/instalaciones.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../components/footer-component/footer-component.component';

@Component({
  selector: 'app-nosotros-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroNosotrosComponent,
    HistoriaComponent,
    ValoresComponent,
    EquipoComponent,
    InstalacionesComponent,
    NavBarComponent,
    FooterComponentComponent
  ],
  templateUrl: './nosotros-page.component.html',
  styleUrl: './nosotros-page.component.css'
})
export class NosotrosPageComponent {

}
