import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit, OnChanges {

  @Input() detail: Passenger;
  
  @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  editing: boolean = false;
    
  constructor() { }

  ngOnInit(): void {

  }
  
  ngOnChanges(changes): void {
    if(changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue)
    }
  }
  
  onNameChange(value: string) {
    console.log('Value: ', value)
    this.detail.fullname = value;
  }
  
  toggleEdit() {
    if(this.editing) {
      this.edit.emit(this.detail)
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
  goToPassenger() {
    this.view.emit(this.detail)
  }
}
