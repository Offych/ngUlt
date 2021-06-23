import { Component, OnInit } from "@angular/core";

import { Passenger } from '../../models/passenger.interface';


@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.components.scss'],
    templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {

    passengers: Passenger[];
     
     ngOnInit(): void {
        this.passengers = [{
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
        
        handleRemove(event) {
            console.log(event)
        }
        
        handleEdit(event) {
            console.log(event)
        }
    
}