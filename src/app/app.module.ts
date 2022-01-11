import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './modules/materials.module';
import { PipelinesComponent } from './components/pipelines/pipelines.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { StudentsComponent } from './components/students/students.component';
import { GroupsComponent } from './components/groups/groups.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HeaderComponent } from './navigation/header/header.component';
import { BackgroundHeaderComponent } from './navigation/header/background-header/background-header.component';
import { SidenavService } from './navigation/sidenav/sidenav.service';
import { LessonsModule } from './modules/lessons.module';
import { SimpleService } from './components/lessons/lesson007/simple.service';

@NgModule({
  declarations: [
    AppComponent,
    PipelinesComponent,
    AuthenticationComponent,
    RegistrationComponent,
    TemplatesComponent,
    StudentsComponent,
    GroupsComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    BackgroundHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    LessonsModule,
    BrowserAnimationsModule
  ],
  providers: [SidenavService, SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
