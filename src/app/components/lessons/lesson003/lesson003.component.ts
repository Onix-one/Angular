import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson003',
  templateUrl: './lesson003.component.html',
  styleUrls: ['./lesson003.component.css']
})
export class Lesson003Component implements OnInit {

  counter: number = 1;


  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

  colsileloger(e: number) {
    console.log(e);
  }

  resulr = '';

  show(elem1: any, elem2: any, elem3: any) {
    for (let i = 0; i < arguments.length; i++) {
      console.dir(arguments[i]);
      this.resulr += arguments[i].textContent + ','
    }
  }
  name: string = '';
  writeName(e: any) {
    this.name = e;
  }
  testName: string = 'Alex';
  textInformation: string = ' some value';

  colspan: number = 3;

  showTable(e: any) {
    console.log(e);
    console.dir(e);
  }

  classOne: string = 'alert alert-primary';
  flagOne: boolean = true;

  flagtwo: boolean = true;
  
  ngOnInit(): void {
  }


}
