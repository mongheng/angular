import { User } from './model/user';
import { HttpcontrollerService } from './services/httpcontroller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpcontrollerService]
})
export class AppComponent implements OnInit {
  title = 'app';
  public users: User[];
  public puser: User;
  public ruser: User;

  constructor(private httpservice: HttpcontrollerService) {}

  ngOnInit(): void {
    this.httpservice.getTypes<User>().then(user => this.users = user);
    this.httpservice.getTypeById<User>('76519be9-1975-4ac5-b1d2-1892c7d2e533').then(u => this.puser = u);
    // this.httpservice.deleteType('6b1946ad-d115-4a2e-a607-b27dbfde09f1').then(() => null);
    this.httpservice.getTypeByIdRequestParam<User>('4489d1e1-1b51-4dbe-9c6c-d2df827080ab').then(r => this.ruser = r);
  }
}
