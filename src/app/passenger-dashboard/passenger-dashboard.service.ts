import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Passenger } from './models/passenger.interface';
import { Observable } from 'rxjs';


const PASSENGER_URL: string = "http://localhost:4000/passengers";
@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {


  constructor(private http: HttpClient) { }
  
  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_URL);
  }
}
