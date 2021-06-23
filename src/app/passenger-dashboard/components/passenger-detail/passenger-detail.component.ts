import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit, OnChanges {

  @Input() detail: Passenger;
  
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  editing: boolean = false;
    
  constructor() { }

  ngOnInit(): void {
    console.log(this.detail)
  }
  
  ngOnChanges(changes): void {
    if(changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue)
    }
    console.log(changes)
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
}
