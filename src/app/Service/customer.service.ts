import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/customer";

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addcustomer`, customer);
  }

  getAllCustomer(): any {
    return this.http.get(`${this.baseUrl}/getallcustomer`);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletecustomer/${id}`, { responseType: 'text' });
  }

  updateCustomer(customer: Object, id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/updatecustomer/${id}`, customer);
  }

  searchCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getcustomer/${id}`);
  }
}
