import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { routing } from './store.routing';

@NgModule({
  imports: [
    CommonModule, routing
  ],
  declarations: [
    DashboardComponent,
    Page2Component,
    Page3Component
  ],
  exports: [
    DashboardComponent,
    Page2Component,
    Page3Component
  ],
  bootstrap: [ DashboardComponent ]
})
export class StoreModule { }
