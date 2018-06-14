import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CityComponent } from './city/city.component';
import { CourseComponent } from './course/course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';
import { RestrictedAreaGuard } from './guards/restricted-area.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CityComponent,
    CourseComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, RouterModule, routing
  ],
  providers: [ RestrictedAreaGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
