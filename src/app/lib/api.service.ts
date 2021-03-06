import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public host = environment.apiUrl;
  constructor(private _http: HttpClient, public router: Router) {}

  post(url: string, obj: any) {
    const body = JSON.stringify(obj);
    let cloneHeader: any = {};
    cloneHeader['dataType']= "json",
    cloneHeader['Content-Type'] = 'application/json;charset=utf-8';
    const headerOptions = new HttpHeaders(cloneHeader);
    return this._http
      .post<any>(this.host + url, body, { headers: headerOptions })
      .pipe(
        map(res => {
          return res;
        })
      );      
  }

  put(url: string, obj: any) {
    const body = JSON.stringify(obj);
    // let cloneHeader: any = {};
    // cloneHeader['Content-Type'] = 'application/json';
    // const headerOptions = new HttpHeaders(cloneHeader);
    return this._http
      .put<any>(this.host + url, body)
      .pipe(
        map(res => {
          return res;
        })
      );      
  }

  get(url: string) {
    // let cloneHeader: any = {};
    // cloneHeader['Content-Type'] = 'application/json';
    // const headerOptions = new HttpHeaders(cloneHeader);
    return this._http
      .get(this.host + url)
      .pipe(
        map(res  => {
          return res;
        })
      );       
  } 
}
