import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-nested',
  template: `
  <div>
  <p>second-nested component!</p>
  </div>
`,
  styleUrls: ['./second-nested.component.css']
})
export class SecondNestedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
