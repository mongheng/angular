import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SimpleRouteComponent } from './components/simple-route/simple-route.component';
import { ViewuserComponent } from './components/viewuser/viewuser.component';

const routes: Routes = [
  { path: 'simple-route',
    component: SimpleRouteComponent,
    outlet: 'popup' 
  },
  {
    path: 'user/:userid',
    component: ViewuserComponent
  }
];

export const AppRoutingRoutes = RouterModule.forRoot(routes, {enableTracing: true});
