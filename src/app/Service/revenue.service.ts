import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Revenue } from '../Component/model/Revenue';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/admin";
  
  getRevenue(): Observable<Revenue> {
    // return this.http.get(`${this.baseUrl}/revenue`);
    return this.http.get<Revenue>(`${this.baseUrl}/revenue`);
  }
}
