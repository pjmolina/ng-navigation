import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CityComponent } from './city/city.component';
import { CourseComponent } from './course/course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestrictedAreaGuard } from './guards/restricted-area.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent, canActivate: [ RestrictedAreaGuard ]  },
    { path: 'cities/:id', component: CityComponent },
    { path: 'courses/:id', component: CourseComponent },
    { path: '**', component: NotFoundComponent },
];

// IsLoggedGuard IsAdminGuard 

export const routing = RouterModule.forRoot(routes);
