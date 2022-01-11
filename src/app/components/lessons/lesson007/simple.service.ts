import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  constructor() { }

  counter: number = 0;

  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
}
