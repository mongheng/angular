import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpcontrollerService {

  private url = 'http://localhost:8090/vaadinproject/';

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  public getTypes<T>(): Promise<T[]> {
    return this.httpClient.get(this.url + 'items').toPromise()
      .then(res => res.valueOf() as T[]).catch(this.handleError);
  }

  public getTypeById<T>(id: string): Promise<T> {
    return this.httpClient.get(this.url + 'item/' + id).toPromise()
      .then(res => res.valueOf() as T).catch(this.handleError);
  }

  public getTypeByIdRequestParam<T>(id: string): Promise<T> {
    return this.httpClient.get(this.url + 'item?id=' + id).toPromise()
    .then(res => res.valueOf() as T).catch(this.handleError);
  }

  public createType<T>(t: T): Promise<T> {
    return this.httpClient.post(this.url + 'save', JSON.stringify(t), {headers: this.headers})
      .toPromise().then(res => res.valueOf() as T).catch(this.handleError);
  }

  public updateType<T>(t: T): Promise<T> {
    return this.httpClient.put(this.url + 'edit', JSON.stringify(t), {headers: this.headers})
      .toPromise().then(res => res.valueOf() as T).catch(this.handleError);
  }

  public deleteType(id: string): Promise<void> {
    return this.httpClient.delete(this.url + 'delete/' + id, {headers: this.headers})
      .toPromise().then(() => null).catch(this.handleError);
  }

  public selectTypes<T, S>(t: T, s: S): Promise<T> {
    return null;
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}
