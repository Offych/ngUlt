import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';


@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.components.scss'],
    templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {
    
    constructor(private passengerService: PassengerDashboardService,
                private router: Router) {}

    passengers: Passenger[];
     
     ngOnInit(): void {
        this.passengerService.getPassengers().subscribe((data: Passenger[]) => {
            console.log('Data: ', data)
            this.passengers = data;
        });
        }
        
        handleRemove(event: Passenger) {
            this.passengerService.removePassenger(event).subscribe((data: Passenger) => {
                this.passengers = this.passengers.filter((passenger: Passenger) => {
                    return passenger.id !== event.id;
                })
            })
        }
        
        handleEdit(event: Passenger) {
            this.passengerService.updatePassenger(event).subscribe((data: Passenger) => {
                this.passengers = this.passengers.map((passenger: Passenger) => {
                    if(passenger.id === event.id) {
                        passenger = Object.assign({}, passenger, event)
                    }
                    return passenger
                })
                console.log(this.passengers)
            })
        }

        handleView(event: Passenger) {
            this.router.navigate(['/passengers', event.id])
        }
}