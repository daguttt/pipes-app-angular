import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name: string = 'Daniel';
  changeName() {
    this.name = 'Otro nombre';
  }
}
