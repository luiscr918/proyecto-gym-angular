import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailRegistro',
  standalone: true,
})
export class EmailRegistroPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    } else {
      return 'Su email será: ' + value.toLowerCase();
    }
  }
}
