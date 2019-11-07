import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit {

  message: string = "You have gotten lost sucker!"

  changeMessage() {
    this.message = "I am different now!"
  }

  constructor() { }

  ngOnInit() {
  }

}
