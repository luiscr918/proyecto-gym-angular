import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreUsuarioRegistro',
  standalone: true
})
export class NombreUsuarioRegistroPipe implements PipeTransform {

  transform(valor:string): string {
    if (!valor) {
      return ''
    }else{
      return 'Se registrará con nombre: ' + valor.toUpperCase();
    }
  }

}
