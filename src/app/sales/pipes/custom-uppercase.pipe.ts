import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase',
})
export class CustomUpperCasePipe implements PipeTransform {
  transform(value: string, inUpperCase: boolean = true): string {
    return inUpperCase ? value.toUpperCase() : value.toLowerCase();
  }
}
