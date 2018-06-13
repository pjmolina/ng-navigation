import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CityComponent } from './city/city.component';
import { CourseComponent } from './course/course.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cities/:id', component: CityComponent },
    { path: 'courses/:id', component: CourseComponent },
    { path: '**', component: NotFoundComponent },
];

export const routing = RouterModule.forRoot(routes);
