import { Component, OnInit } from '@angular/core';
import { HttpcontrollerService } from '../../services/httpcontroller.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css'],
})
export class ViewuserComponent implements OnInit {
  fwuser: User = new User();
  swuser: User = new User();
  uid: string;

  // This is the first way how to get params id from link.
  private first: any = this.activateRoute.paramMap.
    switchMap((params: ParamMap) => {
      this.uid = params.get('userid');
      if (this.uid == null) {
        alert('UID:' + this.uid);
      } else {
        alert('UID:' + this.uid);
        return this.httpservice.getTypeById<User>(this.uid);
      }
      }).subscribe(u => this.fwuser = u);

  // This is the second way how to get params id from link
  private sid: string = this.activateRoute.snapshot.paramMap.get('userid'); 
  private second: any = this.httpservice.getTypeById<User>(this.sid).then(u => this.swuser = u);

  constructor(private httpservice: HttpcontrollerService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }
}
