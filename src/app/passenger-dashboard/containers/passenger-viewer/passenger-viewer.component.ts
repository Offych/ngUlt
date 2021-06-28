import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  
  constructor(private passengerService: PassengerDashboardService,
              private route: ActivatedRoute,
              private router: Router
            ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((data: Passenger) => this.passengerService.getPassenger(data.id)
    )).subscribe((data: Passenger) => this.passenger = data)
    
  }

  onUpdatePassenger(event: Passenger) {
    console.log(event);
    this.passengerService.updatePassenger(event).subscribe((data: Passenger) => {
      this.passenger = Object.assign({}, this.passenger, event)
    })
  }

}
