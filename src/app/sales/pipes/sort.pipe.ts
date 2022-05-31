import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interface';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(heroes: Hero[]): Hero[] {
    return [...heroes].sort((a, b) => (a.name > b.name ? 1 : -1));
  }
}
