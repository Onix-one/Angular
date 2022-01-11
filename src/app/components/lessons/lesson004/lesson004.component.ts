import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson004',
  templateUrl: './lesson004.component.html',
  styleUrls: ['./lesson004.component.css']
})
export class Lesson004Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  flag = true;
  flagTwo = true;
  flagThree = true;
  flagFour = true;

  changeFlag() {
    this.flagFour = false;
    setTimeout(() => {
      this.flagFour = true;
    }, 2000)
  }

  month: string[] = ['June', 'July', 'August'];
  selectedMonth: string;
  counter: number = 0;

  switch() {
    if (this.counter === 3) {
      this.counter = 0;
    }
    this.selectedMonth = this.month[this.counter];
    this.counter++;
  }

  stringArray = ['1 string', '2 string', '3 string'];

  addString() {
    this.stringArray.push(`${this.stringArray.length + 1} string`)
  }
  removeString() {
    this.stringArray.pop();
  }
  objArray = [{ prop: 'point one' }, { prop: 'point two' },
  { prop: 'point three' }, { prop: 'point four' }, { prop: 'point five' }];
  items = [1, 2, 3, 4, 5, 6, 7]

  textOne = 'Text one';
  numberOne = Math.PI;
  date: Date = new Date(1987, 7, 5);

}
