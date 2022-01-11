import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child01',
  templateUrl: './view-child01.component.html',
  styleUrls: ['./view-child01.component.css']
})
export class ViewChild01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  color = false;
  changeColor(){
    this.color = ! this.color;
  }



}
