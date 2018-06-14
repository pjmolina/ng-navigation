import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'page2', component: Page2Component },
    { path: 'page3', component: Page3Component },
    { path: '**', component: DashboardComponent },
];

export const routing = RouterModule.forChild(routes);
