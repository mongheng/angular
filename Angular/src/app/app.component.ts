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
  
  constructor(private httpservice: HttpcontrollerService) {}
  
  ngOnInit(): void {
    this.httpservice.getTypes<User>().then(user => this.users = user);
  }
}
