import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-nested',
  templateUrl: './output-nested.component.html',
  styleUrls: ['./output-nested.component.css']
})
export class OutputNestedComponent implements OnInit {
  @Output() textEvent: EventEmitter<string> = new EventEmitter();
  @Output() counterEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  text: string = 'Default';
  counter: number = 0;

  read(value: string) {
    if (value === "") {
      this.text = 'Default';
    }
    else {
      this.text = value;
    }
    this.textEvent.emit(this.text);
  }

  increment() {
    this.counter = this.counter + 1;
    this.counterEvent.emit(this.counter);
  }

  reset() {
    this.counter = 0;
    this.counterEvent.emit(this.counter);
  }
  ngOnInit(): void {
  }
}
