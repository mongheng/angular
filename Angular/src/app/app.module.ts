import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgControl } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatListModule, MatAutocompleteModule, MatSelectModule, MatButtonModule, MatMenuModule,
         MatIconModule, MatFormFieldModule, MatToolbarModule, MatInputModule, MatTableModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SimpleRouteComponent } from './components/simple-route/simple-route.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SimpleRouteComponent,
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
