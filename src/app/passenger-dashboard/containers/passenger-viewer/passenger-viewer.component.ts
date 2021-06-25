import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  
  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.passengerService
    .getPassenger(1)
    .subscribe((data: Passenger) => this.passenger = data)
    
  }

  onUpdatePassenger(event: Passenger) {
    console.log(event);
    this.passengerService.updatePassenger(event).subscribe((data: Passenger) => {
      this.passenger = Object.assign({}, this.passenger, event)
    })
  }

}
