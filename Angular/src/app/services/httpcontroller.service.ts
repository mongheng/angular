import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpcontrollerService {
  
  private url = 'http://localhost:8090/vaadinproject/';
  
  private headers = new HttpHeaders({});

  constructor(private httpClient: HttpClient) { }
  
  public getTypes<T>(): Promise<T[]> {
    return this.httpClient.get(this.url + 'items').toPromise().then(res => res.valueOf() as T[]);
  }
  
  public getTypeById<T>(id: string): Promise<T> {
    return this.httpClient.get(this.url + 'item?id=' + id).toPromise().then(res => res.valueOf() as T);
  }
  
  public createType<T>(t: T): Promise<T> {
    return this.httpClient.post(this.url + 'save', JSON.stringify(t), {headers: this.headers})
      .toPromise().then(res => res.valueOf() as T);
  }
  
  public updateType<T>(t: T): Promise<T> {
    return this.httpClient.put(this.url + 'eidt', JSON.stringify(t), {headers: this.headers})
      .toPromise().then(res => res.valueOf() as T);
  }

  public deleteType<T>(t: T): Promise<T> {
    return null;
  }
}
