import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Passenger } from './models/passenger.interface';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


const PASSENGER_URL: string = "http://localhost:4000/passengers";
@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {
  

  constructor(private http: HttpClient) { }
  
  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_URL);
  }
  
  getPassenger(id: number): Observable<Passenger> {
    let url = `${PASSENGER_URL}/${id}`;
    return this.http.get<Passenger>(url);
  }

  updatePassenger(passenger: Passenger) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    const url = `${PASSENGER_URL}/${passenger.id}`
    return this.http.put(url, passenger,  { headers })
  }

  removePassenger(passenger: Passenger) {
    const url = `${PASSENGER_URL}/${passenger.id}`
    return this.http.delete(url)
  }
  
  
}
