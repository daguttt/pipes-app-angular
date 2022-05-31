import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase',
})
export class CustomUpperCasePipe implements PipeTransform {
  transform(value: string): string {
    return '¡HOLA MUNDO!';
  }
}
