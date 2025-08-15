import { Component } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicios } from '../../../interfaces/servicios';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servicios-actualizar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './servicios-actualizar.component.html',
  styleUrl: './servicios-actualizar.component.css'
})
export class ServiciosActualizarComponent {
  constructor(private servicioServices: ServiciosService,private router:Router, private ruta:ActivatedRoute ){}
  id:number=0;
  servicio: Servicios={
    id:0,
    nombre:'',
    descripcion:'',
    imagenURL:''
  }
  ngOnInit():void{
    this.ruta.params.subscribe((params)=>{
      this.id=params['id'];
      this.servicioServices.buscar(this.id).subscribe({
        next: (data)=>{
          this.servicio=data;
        }, error: (error)=>{
          console.log('Error al cargar', error);
          
        }
      })
    })
  }
  editarSevicio(id:number, servicio:Servicios){
    this.servicioServices.putServicio(id, servicio).subscribe({
      next: ()=>{
        alert('Servicio actualizado correctamente');
        this.router.navigate(['/servicios'])
      }, error: (error)=>{
        console.log(error);
        
      }
    })

  }
  
}
