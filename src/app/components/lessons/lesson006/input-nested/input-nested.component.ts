import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-nested',
  templateUrl: './input-nested.component.html',
  styleUrls: ['./input-nested.component.css'],
  inputs: ['name']
})
export class InputNestedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = 'Default name';

  @Input() counterValue: number = 0;

  @Input('step') stepCounter = 1;

  increment() {
    this.counterValue = this.counterValue + this.stepCounter;
  }
}
