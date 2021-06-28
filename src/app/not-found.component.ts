import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>
      Page is Not Found!
    </div>
    `
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
