import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/employee";

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addemployee`, employee);
  }

  getAllEmployee(): any {
    return this.http.get(`${this.baseUrl}/getallemployee`);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteemployee/${id}`, { responseType: 'text' });
  }

  updateEmployee(employee: Object, id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateemployee/${id}`, employee);
  }

  searchEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getemployee/${id}`);
  }
}
