import { Component } from '@angular/core';

@Component({
  selector: 'app-page-non-common',
  templateUrl: './page-non-common.component.html',
  styles: [],
})
export class PageNonCommonComponent {
  public name: string = 'Jessica';
  public gender: string = 'femenino';
  public genderMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  changeName(): void {
    this.name === 'Jessica' ? (this.name = 'Daniel') : (this.name = 'Jessica');
    this.gender === 'femenino'
      ? (this.gender = 'masculino')
      : (this.gender = 'femenino');
  }
}
