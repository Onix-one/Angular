import { Component, ViewChild, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ViewChild01Component } from './view-child01/view-child01.component';
import { ViewChild02Component } from './view-child02/view-child02.component';


@Component({
  selector: 'app-lesson006',
  templateUrl: './lesson006.component.html',
  styleUrls: ['./lesson006.component.css']
})
export class Lesson006Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stepCounter: number = 10;
  startCounterValue: number = 100;

  text: string = 'Default';
  counter: number = 0;

  textEventHandler(value: string) {
    this.text = value;
  }
  counterEventHandler(value: number) {
    this.counter = value;
  }

  //===============ViewChild===================

  @ViewChild(ViewChild01Component) childBlock: ViewChild01Component;


  changeColor() {
    this.childBlock.changeColor();
  }

  @ViewChild('secondViewChild') secondChildBlock: ViewChild01Component;
  secondChangeColor() {
    this.secondChildBlock.changeColor();
  }

  textforField: string = 'Text for input field';

  @ViewChild('inputTwo') inputElement: ElementRef
  takeFocus() {
    this.inputElement.nativeElement.focus();
  }

  takeValue() {
    if (this.inputElement.nativeElement.value === '') {
      this.textforField = 'Text for input field';
    }
    else {
      this.textforField = this.inputElement.nativeElement.value;
    }
  }

  //===============ViewChildren===================

  @ViewChildren(ViewChild02Component) blocks: QueryList<ViewChild02Component>;
 /*   @ViewChildren('viewChild') blocks: QueryList<any>; */

  addBg() {
    this.blocks.forEach(block => block.changeColor());
  }


}
