import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaActual',
  standalone: true,
})
export class FechaActualPipe implements PipeTransform {
  transform(value: any): string {
    const hoy = new Date();
    return 'La fecha de registro es:' + hoy.toLocaleDateString('es-ES');
  }
}
