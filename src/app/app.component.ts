import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="mx-5 my-5">
      <button class="btn btn-primary" (click)="handleClick(username.value)">Get Value</button>
      <h1 [innerHTML]='title'> </h1>
      <h1>{{title}}</h1>
      <input 
        type="text"
        ([ngModel])="name"
        ><!-- (ngModelChange)="handleChange($event)" -->
      >
      <input type="text" #username>
        <div>
      <img [src]="logo" alt="">
      </div>
      <div>
        {{name}}
      </div>
    </div>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Ultimate Angular';
  logo: string = "https://blog.whoishiring.io/content/images/2017/03/todd_us.png"
  name: string = 'Sasha'

  handleClick(value: string) {
    console.log(value);
    //this.name = 'Sashiko';
  }

  constructor() {
    
  }

  /* handleBlur(event: any) {
    this.name = event.target.value;
    console.log(this.name)
  }
  handleInput(event: any) {
    this.name = event.target.value;
  } */
 
  /* handleChange(value: string) {
    this.name = value
  } */

}
