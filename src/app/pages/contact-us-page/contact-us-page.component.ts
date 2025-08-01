import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponentComponent } from "../../components/footer-component/footer-component.component";
import { ContactUsComponentComponent } from "../../components/contact-us-component/contact-us-component.component";

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent, ContactUsComponentComponent],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.css'
})
export class ContactUsPageComponent {

}
