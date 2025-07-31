import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/home-components/hero-section/hero-section.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
