import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponentComponent } from "./components/footer-component/footer-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-gym-angular';
}
