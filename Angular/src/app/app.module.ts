import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MatListModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SimpleRouteComponent } from './components/simple-route/simple-route.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleRouteComponent,
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'components/simple-route',
        component: SimpleRouteComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
