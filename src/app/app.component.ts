import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="red">
      <h1 [innerHTML]='title'> </h1>
      <h1>{{title}}</h1>
      <input type="text" [value]='name'>
      <div>

      </div>
    </div>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Ultimate Angular';
  logo: string = "../img/logo.jpg"
  name: string = 'Sasha'


  constructor() {
    
  }

}
