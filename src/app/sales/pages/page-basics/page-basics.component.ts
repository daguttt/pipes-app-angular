import { Component } from '@angular/core';

@Component({
  selector: 'app-page-basics',
  templateUrl: './page-basics.component.html',
  styles: [],
})
export class PageBasicsComponent {
  public nameInLower: string = 'daniel';
  public nameInUpper: string = 'DANIEL';
  public completeName: string = 'daNiel GutiErreZ';
}
