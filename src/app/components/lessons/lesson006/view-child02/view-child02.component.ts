import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child02',
  templateUrl: './view-child02.component.html',
  styleUrls: ['./view-child02.component.css']
})
export class ViewChild02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color = false;

  changeColor() {
    this.color = !this.color;
  }

}
