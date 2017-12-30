import { User } from './model/user';
import { HttpcontrollerService } from './services/httpcontroller.service';
import { Component, OnInit } from '@angular/core';
import { Role } from './model/role';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms/src/model';

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
  statu: boolean;

  displayedColumns = ['userid', 'username', 'password', 'telephone', 'email', 'image', 'role'];
  dataSource = new UserDataSource(this.httpservice);

  constructor(private httpservice: HttpcontrollerService) {}

  ngOnInit(): void {
    this.httpservice.getTypes<User>('users').then(user => this.users = user);
    this.httpservice.getTypeById<User>('76519be9-1975-4ac5-b1d2-1892c7d2e533').then(u => this.puser = u);
    // this.httpservice.deleteType('6b1946ad-d115-4a2e-a607-b27dbfde09f1').then(() => null);
    this.httpservice.getTypeByIdRequestParam<User>('4489d1e1-1b51-4dbe-9c6c-d2df827080ab').then(r => this.ruser = r);
    this.httpservice.getTypes<Role>('roles').then(r => this.roles = r);

    if (this.updateRole == null) {
      this.updateRole = new Role;
    }
    this.statu = true;
    console.log('statu:' + this.statu);
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

  public disPlayUser(): void {
    this.selectedUser.userid = this.selectedUser.userid;
    this.selectedUser.email = this.selectedUser.email;
    this.selectedUser.telephone = this.selectedUser.telephone;
    this.selectedUser.password = this.selectedUser.password;
    this.updateRole = this.selectedUser.role;
    this.statu = true;
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

