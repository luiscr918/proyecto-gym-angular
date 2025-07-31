import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponentComponent } from "../../components/footer-component/footer-component.component";
import { HeroSectionComponent } from "../../components/home-components/hero-section/hero-section.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
