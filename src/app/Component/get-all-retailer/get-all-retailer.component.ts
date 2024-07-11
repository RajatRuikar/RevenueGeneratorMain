import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../../Service/retailer.service';
import { Observable, of } from 'rxjs';
import { Retailer } from '../model/Retailer';

@Component({
  selector: 'app-get-all-retailer',
  templateUrl: './get-all-retailer.component.html',
  styleUrl: './get-all-retailer.component.css'
})
export class GetAllRetailerComponent implements OnInit {
  constructor(private service: RetailerService) { }

  public retailer: Observable<Retailer[]> = of([]);
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.retailer = this.service.getAllRetailer();
  }
}
