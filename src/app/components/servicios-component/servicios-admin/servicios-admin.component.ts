import { Component } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';
import { Servicios } from '../../../interfaces/servicios';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './servicios-admin.component.html',
  styleUrl: './servicios-admin.component.css'
})
export class ServiciosAdminComponent {
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
  eliminar(id : number){
    this.servicioServices.deleteServicio(id).subscribe({
      next:()=>{
        alert('Servicio eliminado correctamente')
        window.location.reload();
      }, error: (error)=>{
        console.log(error);
      }
    })
  }
}
