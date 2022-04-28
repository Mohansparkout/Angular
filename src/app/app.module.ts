import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
// import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    AboutComponent,
    CourseComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
