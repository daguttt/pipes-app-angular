import { Component } from '@angular/core';

@Component({
  selector: 'app-page-basics',
  templateUrl: './page-basics.component.html',
  styles: [
    `
      pre {
        line-height: 130%;
      }
    `,
  ],
})
export class PageBasicsComponent {
  public nameInLower: string = 'daniel';
  public nameInUpper: string = 'DANIEL';
  public completeName: string = 'daNiel GutiErreZ';
  public date: Date = new Date();
}
