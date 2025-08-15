import { Component } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servicios-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './servicios-registro.component.html',
  styleUrl: './servicios-registro.component.css'
})
export class ServiciosRegistroComponent {
  constructor(private servicioService: ServiciosService){}
  nombre: string='';
  descripcion:string='';
  imagenURL: string='';
  guardar(formulario : any){
    this.servicioService.postServicio(formulario.value).subscribe({
      next: ()=> {
        alert('Servicio registrado exitosamente')
        window.location.reload();
      }, error: (error)=>{
        console.log(error);
      }
    })
  }
}
