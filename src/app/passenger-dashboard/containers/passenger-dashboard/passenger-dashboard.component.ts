import { Component } from "@angular/core";

import { Passenger } from '../../models/passenger.interface';


@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.components.scss'],
    template: `
        <div>
        <h3>Airline Passengeres</h3>
        <ul>
            <li *ngFor="let passenger of passengers; let i  = index; ">
                <span 
                class='status'
                [class.checked-in]="passenger.checkedIn"></span>
                {{ i }} : {{ passenger.fullname }}
     <!--            <p>{{ passenger | json }}</p> -->
                <div class="date">
                    Check in date: 
                    {{ passenger.checkInDate ? 
                    ( passenger.checkInDate | date: 'd MMMM y' | uppercase ) : 'Not checked in' }}
                </div>
                <div>
                    Children: {{ passenger.children?.length || 0 }}
                </div>
            </li>
        </ul>
        </div>
    `
})

export class PassengerDashboardComponent {
    
    passengers: Passenger[] = [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1623941565321,
        children: [{name: "Ted", age: 12}, {name: 'Chloe', age: 7}]
      },
      {
       id: 2,
       fullname: 'James',
       checkedIn: false,
       checkInDate: null,
       children: null
     },
     {
       id: 3,
       fullname: 'Rose',
       checkedIn: true,
       checkInDate: 1623941578820,
       children: [{name: "Jessica", age: 1}]
     },
     {
       id: 4,
       fullname: 'Louse',
       checkedIn: true,
       checkInDate: null,
       children: null
     },
     {
       id: 5,
       fullname: 'Sasha',
       checkedIn: false,
       checkInDate: 1623941585197,
       children: null
     },
     ]
}