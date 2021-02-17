

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from './employees.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  formdata : Employees;
  private _url:string = 'http://localhost:1200';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employees> {
    return this.http.get<Employees>(this._url+'/employees');
  }

  createEmployee(formdata :Employees): Observable<Employees> {
    return this.http.post<Employees>(this._url+'/employees', JSON.stringify(formdata), this.httpOptions);
  }
  
  getEmployee(_id): Observable<Employees> {
    return this.http.get<Employees>(this._url+'/employees/' + _id);
  }

  updateEmployee(_id, employee): Observable<Employees> {
    return this.http.put<Employees>(this._url+'/employees/' + _id,
    JSON.stringify(employee), this.httpOptions);
  }

  deleteEmployee(_id) {
    return this.http.delete<Employees>(this._url+'/employees/' + _id);
  }
}