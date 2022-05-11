import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  counter = 0;

  constructor() { }

  counterButtonClick() {
    this.counter++;
  }

  ngOnInit(): void {
  }

}
