import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  constructor(private http: HttpClient) { }

baseUrl = "http://localhost:8080/retailer";

  createRetailer(retailer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addretailer`, retailer);
  }

  getAllRetailer(): any {
    return this.http.get(`${this.baseUrl}/getallretailer`);
  }

  deleteRetailer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteretailer/${id}`, { responseType: 'text' });
  }

updateRetailer(retailer : Object,id : number):Observable<any>{
  return this.http.put(`${this.baseUrl}/updateretailer/${id}`,retailer);
}

  searchRetailer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getretailer/${id}`);
  }
}
