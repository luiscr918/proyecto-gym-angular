import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutenticaService } from '../../services/autentica.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isMenuOpen = false;
  usuarioActual = this.autentica.getUsuarioActual();
  get sesionIniciada() {
    return this.autentica.sesionIniciada();
  }

  constructor(private autentica: AutenticaService, private router: Router) {
    this.autentica.usuarioActual$.subscribe(usuario => {
      this.usuarioActual = usuario;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  logout() {
    this.autentica.logout();
    this.usuarioActual = this.autentica.getUsuarioActual();
    this.router.navigate(['/login']);
  }
}
