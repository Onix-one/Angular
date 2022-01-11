import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first-nested',
  templateUrl: './first-nested.component.html',
  styleUrls: ['./first-nested.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
 /*  encapsulation: ViewEncapsulation.None */
})


export class FirstNestedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
