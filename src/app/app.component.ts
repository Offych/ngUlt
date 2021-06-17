import { Component } from '@angular/core';


interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}
@Component({
  selector: 'app-root',
  /* template: `
    <div class="mx-5 my-5">
     <!--  <button class="btn btn-primary"  (click)="handleClick(username.value)">Get Value</button> -->
<!--       <h1 [innerHTML]='title'> </h1> -->
      <h1>{{title}}</h1>
      <input 
        type="text"
        ([ngModel])="name"
        (input)='handleChange($event.target.value)'
        >
        <!-- (ngModelChange)="handleChange($event)" -->
        <!--    <input type="text" #username> -->
        <div>
        <!--       <img [src]="logo" alt=""> -->
      </div>

      <ng-template [ngIf]="name.length > 4">
      <div>
       Searching for... {{name}}
      </div>
      </ng-template>
       <div *ngIf="name.length > 4">
       Searching for... {{name}}
      </div>
    </div>
  `, */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = '';
  logo: string = "https://blog.whoishiring.io/content/images/2017/03/todd_us.png"
  name: string = '';


   passengers: Passenger[] = [{
     id: 1,
     fullname: 'Stephen',
     checkedIn: true
   },
   {
    id: 2,
    fullname: 'James',
    checkedIn: false
  },
  {
    id: 3,
    fullname: 'Rose',
    checkedIn: true
  },
  {
    id: 4,
    fullname: 'Louse',
    checkedIn: true
  },
  {
    id: 5,
    fullname: 'Sasha',
    checkedIn: false
  },
  ]
  handleChange(value: string) {
    this.name = value;
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

/*   
  handleClick(value: string) {
    console.log(value);
    this.name = 'Sashiko';
  } */
}
