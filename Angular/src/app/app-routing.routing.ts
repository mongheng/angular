import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SimpleRouteComponent } from './components/simple-route/simple-route.component';
import { ViewuserComponent } from './components/viewuser/viewuser.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'simple-route',
    component: SimpleRouteComponent,
    outlet: 'popup' 
  },
  {
    path: 'user/:userid',
    component: ViewuserComponent
  }, 
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const AppRoutingRoutes = RouterModule.forRoot(routes, {enableTracing: true});
