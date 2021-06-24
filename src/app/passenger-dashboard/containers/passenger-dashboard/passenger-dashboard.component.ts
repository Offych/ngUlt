import { Component, OnInit } from "@angular/core";

import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';


@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.components.scss'],
    templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {
    
    constructor(private passengerService: PassengerDashboardService) {}

    passengers: Passenger[];
     
     ngOnInit(): void {
        this.passengerService.getPassengers().subscribe((data: Passenger[]) => {
            console.log('Data: ', data)
            this.passengers = data;
        });
        }
        
        handleRemove(event: Passenger) {
            console.log(event)
            this.passengers = this.passengers.filter((passenger: Passenger) => {
                return passenger.id !== event.id;
            })
        }
        
        handleEdit(event: Passenger) {
            this.passengers = this.passengers.map((passenger: Passenger) => {
                if(passenger.id === event.id) {
                    passenger = Object.assign({}, passenger, event)
                }
                return passenger
            })
            console.log(this.passengers)
        }
    
}