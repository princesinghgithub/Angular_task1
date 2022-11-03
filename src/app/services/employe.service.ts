import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeClass } from '../employee-class.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor( private http:HttpClient) { }

  url:string="http://localhost:3000/employee_data"

getEmployee(){
  return this.http.get<EmployeeClass[]>(this.url);
}

}
