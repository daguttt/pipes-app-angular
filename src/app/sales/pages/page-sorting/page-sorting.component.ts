import { Component } from '@angular/core';

@Component({
  selector: 'app-page-sorting',
  templateUrl: './page-sorting.component.html',
  styles: [],
})
export class PageSortingComponent {
  public isInUppercase: boolean = true;
  toggleUppercase() {
    this.isInUppercase = !this.isInUppercase;
  }
}
