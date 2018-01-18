import { User } from './model/user';
import { HttpcontrollerService } from './services/httpcontroller.service';
import { Component, OnInit } from '@angular/core';
import { Role } from './model/role';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { DataSource } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms/src/model';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpcontrollerService]
})
export class AppComponent implements OnInit {
  title = 'app';
  users: User[];
  puser: User;
  ruser: User;
  createUser = new User;
  roles: Role[];
  selectedUser = new User;
  updateRole: Role;
  currectRole: Role;
  bStatu: boolean;

  // AsyncPipe with promises first way
  AsyncUserFirstWay: User;

  // AsyncPipe with promises second way by using async in template (html).
  AsyncUserSecondWay: Promise<User>;

  displayedColumns = ['userid', 'username', 'password', 'telephone', 'email', 'image', 'role'];
  dataSource = new UserDataSource(this.httpservice);

  constructor(private httpservice: HttpcontrollerService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.httpservice.getTypes<User>('users').then(user => this.users = user);
    this.httpservice.getTypeById<User>('670c2fad-9bae-46ac-9d49-3dff500d0b08').then(u => this.puser = u);
    // this.httpservice.deleteType('6b1946ad-d115-4a2e-a607-b27dbfde09f1').then(() => null);
    this.httpservice.getTypeByIdRequestParam<User>('4489d1e1-1b51-4dbe-9c6c-d2df827080ab').then(r => this.ruser = r);
    this.httpservice.getTypes<Role>('roles').then(r => this.roles = r);

    if (this.updateRole == null && this.currectRole == null) {
      this.currectRole = new Role;
      this.updateRole = new Role;
    }
    this.bStatu = false;

    // AsyncPipe with promises first way
    this.getAsyncPromise().then(u => this.AsyncUserFirstWay = u as User);

    // AsyncPipe with promises second way
    this.AsyncUserSecondWay = this.getAsyncPromiseSecondWay();
  }

  public saveUser(): void {
    try {
      if (this.createUser.username != null && this.createUser.password != null) {
        this.httpservice.createType<User>(this.createUser);
        console.log('The data had saved....');
        alert('The data had saved....');
        this.clearCreate();
      } else {
        alert('Valid: Please fill your data correctly.');
      }
    } catch (Error) {
        alert(Error.message);
    }
  }

  private clearCreate(): void {
    this.createUser.username = null;
    this.createUser.password = null;
    this.createUser.email = null;
    this.createUser.telephone = null;
    this.createUser.role = null;
  }

  private clearUpdate(): void {
    this.selectedUser.userid = null;
    this.selectedUser.telephone = null;
    this.selectedUser.email = null;
    this.selectedUser.password = null;
    this.selectedUser.role = null;
  }

  public displayUser(): void {
    this.selectedUser.userid = this.selectedUser.userid;
    this.selectedUser.email = this.selectedUser.email;
    this.selectedUser.telephone = this.selectedUser.telephone;
    this.selectedUser.password = this.selectedUser.password;
    this.currectRole = this.selectedUser.role;
    this.bStatu = false;
  }

  public updateUser(): void {
    this.selectedUser.userid = this.selectedUser.userid;
    this.selectedUser.email = this.selectedUser.email;
    this.selectedUser.telephone = this.selectedUser.telephone;
    this.selectedUser.password = this.selectedUser.password;
    this.selectedUser.role = this.selectedUser.role;
    try {
      if (this.selectedUser.username != null && this.selectedUser.userid != null) {
        this.httpservice.updateType<User>(this.selectedUser);
        console.log('The data had updated....');
        alert('The data had updated....');
        this.clearUpdate();
      } else {
        alert('can not update. Please check your data again.');
      }
    } catch (error) {
      alert(error.message);
    }
  }

  public deleteUser(): void {
    try {
      if (this.selectedUser.username != null) {
        alert('Are you sure you want to delete ' + this.selectedUser.username + '?');
        this.httpservice.deleteType(this.selectedUser.userid);
        alert(this.selectedUser.username + 'had deleted from data store.');
        this.clearUpdate();
      } else {
        alert('vaild: can not delete. Please check or select your data again.');
      }
    } catch (error) {
      alert(error.message);
    }
  }

  public back(): void {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    this.bStatu = true;
  }

  /** AsyncPipe with promises first way
   *
   *  @Param: ressolve(this.puser) you can replace params by using string or any object
   */
  private getAsyncPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.puser as User), 10000);
    });
  }

  /** AsyncPipe with promises second way
   *
   *  @Param: ressolve(this.puser) you can replace params by using string or any object
   *  and we use async key word in html template (ex: {{ any object | async }})
   */
  private getAsyncPromiseSecondWay() {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => resolve(this.puser), 10000);
    });
  }

  private getAsyncObservable() {
    return Observable.interval(1000);
  }
}
export class UserDataSource extends DataSource<any> {

  constructor(private httpcontrollerService: HttpcontrollerService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.httpcontrollerService.selectUsers('users');
  }

  disconnect() {}
  }

