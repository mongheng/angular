import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgControl } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatListModule, MatAutocompleteModule, MatSelectModule, MatButtonModule, MatMenuModule,
         MatIconModule, MatFormFieldModule, MatToolbarModule, MatInputModule, MatTableModule,
         MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SimpleRouteComponent } from './components/simple-route/simple-route.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ViewuserComponent } from './components/viewuser/viewuser.component';
import { environment } from '../environments/environment';
import { AppRoutingRoutes } from './app-routing.routing';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleRouteComponent,
    DatePickerComponent,
    ViewuserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    AppRoutingRoutes
    /* RouterModule.forRoot([
      {
        path: 'simple-route',
        component: SimpleRouteComponent,
        outlet: 'popup'
      },
      {
        path: 'user/:userid',
        component: ViewuserComponent
      }
    ], {enableTracing: true}) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
