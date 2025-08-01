import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponentComponent } from "../../components/footer-component/footer-component.component";
import { HeroSectionComponent } from "../../components/home-components/hero-section/hero-section.component";
import { BienvenidaComponent } from "../../components/home-components/bienvenida/bienvenida.component";
import { PrinicipalBienvenidaComponent } from "../../components/home-components/prinicipal-bienvenida/prinicipal-bienvenida.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent, HeroSectionComponent, BienvenidaComponent, PrinicipalBienvenidaComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
