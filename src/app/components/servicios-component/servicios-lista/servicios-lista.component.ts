import { Component } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';
import { Servicios } from '../../../interfaces/servicios';

@Component({
  selector: 'app-servicios-lista',
  standalone: true,
  imports: [],
  templateUrl: './servicios-lista.component.html',
  styleUrl: './servicios-lista.component.css'
})
export class ServiciosListaComponent {
  constructor(private servicioServices: ServiciosService){}
  servicios: Servicios[]=[]
  ngOnInit(){
    this.servicioServices.getServicio().subscribe({
      next:(data)=>{
        this.servicios=data;
      }, error : (error)=>{
        console.log(error);
      }
    })
  }
}
