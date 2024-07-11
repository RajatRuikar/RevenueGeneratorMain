import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/admin";

  getAdminDetails(): any {
    return this.http.get(`${this.baseUrl}/getAdmin`);
  }

  updateAdminDetail(admin: Object): Observable<any> {
    return this.http.put(`${this.baseUrl}/set`, admin);
  }

}
