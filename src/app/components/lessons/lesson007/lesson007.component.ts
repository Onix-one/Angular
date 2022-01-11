import { Component, OnInit } from '@angular/core';
import { SimpleService } from './simple.service';
import { LocalService } from './local.service';


@Component({
  selector: 'app-lesson007',
  templateUrl: './lesson007.component.html',
  styleUrls: ['./lesson007.component.css'],
  providers: [LocalService]
})
export class Lesson007Component implements OnInit {

  constructor(public simpleService: SimpleService, private localService: LocalService) { }

  itemsList: string[];

  ngOnInit(): void {
    this.itemsList = this.localService.getData();
  }

}
