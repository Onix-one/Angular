import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { GroupsComponent } from './components/groups/groups.component';
import { StudentsComponent } from './components/students/students.component';
import { PipelinesComponent } from './components/pipelines/pipelines.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { Lesson003Component } from './components/lessons/lesson003/lesson003.component';
import { Lesson004Component } from './components/lessons/lesson004/lesson004.component';
import { Lesson005Component } from './components/lessons/lesson005/lesson005.component';
import { Lesson006Component } from './components/lessons/lesson006/lesson006.component';
import { Lesson007Component } from './components/lessons/lesson007/lesson007.component';
import { Lesson008Component } from './components/lessons/lesson008/lesson008.component';
import { Lesson009Component } from './components/lessons/lesson009/lesson009.component';
import { Lesson010Component } from './components/lessons/lesson010/lesson010.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "authentication", component: AuthenticationComponent },
  { path: "groups", component: GroupsComponent },
  { path: "students", component: StudentsComponent },
  { path: "pipelines", component: PipelinesComponent },
  { path: "templates", component: TemplatesComponent },
  { path: "lessons/lesson003", component: Lesson003Component },
  { path: "lessons/lesson004", component: Lesson004Component },
  { path: "lessons/lesson005", component: Lesson005Component },
  { path: "lessons/lesson006", component: Lesson006Component },
  { path: "lessons/lesson007", component: Lesson007Component },
  { path: "lessons/lesson008", component: Lesson008Component },
  { path: "lessons/lesson009", component: Lesson009Component },
  { path: "lessons/lesson010", component: Lesson010Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
