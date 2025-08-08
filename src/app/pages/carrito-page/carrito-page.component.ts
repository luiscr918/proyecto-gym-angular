import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponentComponent } from '../../components/footer-component/footer-component.component';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { ProductoConId } from '../../interfaces/productos';
import { FacturaComponentComponent } from "../../components/factura-component/factura-component.component";

@Component({
  selector: 'app-carrito-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponentComponent, CommonModule, FacturaComponentComponent],
  templateUrl: './carrito-page.component.html',
  styleUrl: './carrito-page.component.css',
})
export class CarritoPageComponent {
  constructor(private servicioCarrito: CarritoService) {}

  pedidos: ProductoConId[] = [];
  ngOnInit(): void {
    this.servicioCarrito.obtenerCarrito().subscribe((data) => {
      this.pedidos = data;
      console.log(this.pedidos);
    });
  }
}
