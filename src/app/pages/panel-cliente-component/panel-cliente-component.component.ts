import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponentComponent } from "../../components/footer-component/footer-component.component";

@Component({
  selector: 'app-panel-cliente-component',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponentComponent],
  templateUrl: './panel-cliente-component.component.html',
  styleUrls: ['./panel-cliente-component.component.css']
})
export class PanelClienteComponentComponent implements OnInit {
  cliente?: Cliente;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuariosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.buscarClienteConSuscripciones(id).subscribe(
      data => {
        this.cliente = data;
      }
    );
  }

  // Cálculo de días restantes de suscripción
  calcularDiasRestantes(fechaFin: string): string {
    const hoy = new Date();
    const fin = new Date(fechaFin);
    const diferenciaMs = fin.getTime() - hoy.getTime();
    const dias = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
    return dias > 0 ? `${dias} días` : 'Expirada';
  }

  diasRestantes(fechaFin: string): number {
    const hoy = new Date();
    const fin = new Date(fechaFin);
    return Math.ceil((fin.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
  }

  // ---------------- IMC ----------------
  calcularIMC(): number {
    if (!this.cliente?.peso || !this.cliente?.altura) return 0;
    return this.cliente.peso / (this.cliente.altura ** 2);
  }

  evaluarIMC(): string {
    const imc = this.calcularIMC();
    if (imc < 18.5) return 'Bajo';
    if (imc >= 18.5 && imc < 25) return 'Normal';
    if (imc >= 25 && imc < 30) return 'Sobrepeso';
    return 'Obesidad';
  }

  colorIMC(): string {
    const imc = this.calcularIMC();
    if (imc < 18.5) return 'text-yellow-400';
    if (imc >= 18.5 && imc < 25) return 'text-green-400';
    if (imc >= 25 && imc < 30) return 'text-yellow-500';
    return 'text-red-500';
  }
}
