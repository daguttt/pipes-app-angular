import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-page-non-common',
  templateUrl: './page-non-common.component.html',
  styles: [],
})
export class PageNonCommonComponent {
  // i18nSelectPipe
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

  // -**********************************-

  // i18nPluralPipe
  public customers: string[] = [
    'Maria',
    'Daniel',
    'Hernando',
    'Eduardo',
    'Fernando',
  ];
  public customersMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  removeCustomerFromList() {
    this.customers.pop();
  }

  // -**********************************-

  // KeyValuePipe
  public person = {
    name: 'Daniel',
    age: 19,
    profession: 'Dev',
  };

  // -**********************************-

  // JsonPipe
  public heros = [
    {
      name: 'Superman',
      flies: true,
    },
    {
      name: 'Robin',
      flies: false,
    },
    {
      name: 'Aquaman',
      flies: false,
    },
  ];

  // -**********************************-

  // AsyncPipe
  public myObservable = interval(1000);
  public myPromise = new Promise((resolve, _) => {
    setTimeout(() => {
      resolve('Tengo la data de la promsea');
    }, 3500);
  });
}
