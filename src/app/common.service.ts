import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';

//import 'rxjs/add/operator/map';
//import 'rxjs/Rx';
import { map } from 'rxjs/operators';

import 'rxjs/add/operator/do';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class CommonService {

  constructor(private http: Http) { }

  saveFault(fault) {
    return this.http.post('http://localhost:8080/api/saveFault/', fault).pipe(map((response: Response) =>response.json()))
  }

  getFault() {
    return this.http.get('http://localhost:8080/api/getFault/').pipe(map((response: Response) =>response.json()))
  }

  deleteUser(id) {
    return this.http.post('http://localhost:8080/api/deleteFault/', {'id': id}).pipe(map((response: Response) =>response.json()))
  }
}
