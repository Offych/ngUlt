import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="red">
      <button class="btn btn-primary" (click)="handleClick()">Change Name</button>
      <h1 [innerHTML]='title'> </h1>
      <h1>{{title}}</h1>
      <input 
        type="text"
        ([ngModel])="name"
        ><!-- (ngModelChange)="handleChange($event)" -->
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


  constructor() {
    
  }

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(this.name)
  }
  handleInput(event: any) {
    this.name = event.target.value;
  }
  handleClick() {
    this.name = 'Sashiko';
  } 
  handleChange(value: string) {
    this.name = value
  }

}
