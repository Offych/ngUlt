import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {
  @Input() detail: Passenger;
  
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  editing: boolean = false;
    
  constructor() { }

  ngOnInit(): void {
    console.log(this.detail)
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
