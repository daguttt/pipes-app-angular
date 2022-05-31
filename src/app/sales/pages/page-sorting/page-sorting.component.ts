import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-page-sorting',
  templateUrl: './page-sorting.component.html',
  styles: [],
})
export class PageSortingComponent {
  public isInUppercase: boolean = true;
  public sortBy: string = '';
  public heroes: Hero[] = [
    {
      name: 'Superman',
      flies: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      flies: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      flies: false,
      color: Color.green,
    },
    {
      name: 'Daredevil',
      flies: false,
      color: Color.red,
    },
    {
      name: 'Linterna verde',
      flies: true,
      color: Color.green,
    },
  ];
  toggleUppercase() {
    this.isInUppercase = !this.isInUppercase;
  }
  changeSorting(sortBy: string) {
    this.sortBy = sortBy;
  }
}
