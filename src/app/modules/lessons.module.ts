import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { } from 'src/app/components/lessons/lesson003/lesson003.component';

import {
  Lesson003Component, Lesson004Component, Lesson005Component, Lesson006Component,
  Lesson007Component, Lesson008Component, Lesson009Component, Lesson010Component,
  FirstNestedComponent, SecondNestedComponent, InputNestedComponent, OutputNestedComponent,
  ViewChild01Component, ViewChild02Component,ViewChild03Component, ViewChild04Component
} from 'src/app/components/lessons/index';

import { MaterialsModule } from './materials.module';
import { NgContentComponent } from '../components/lessons/lesson006/ng-content/ng-content.component';

@NgModule({
  declarations: [
    Lesson003Component,
    Lesson004Component,
    Lesson005Component,
    FirstNestedComponent,
    SecondNestedComponent,
    Lesson006Component,
    InputNestedComponent,
    OutputNestedComponent,
    NgContentComponent,
    Lesson007Component,
    Lesson008Component,
    Lesson009Component,
    Lesson010Component,
    ViewChild01Component,
    ViewChild02Component,
    ViewChild03Component,
    ViewChild04Component
  ],
  imports: [
    CommonModule,
    MaterialsModule,
  ]
})
export class LessonsModule { }
