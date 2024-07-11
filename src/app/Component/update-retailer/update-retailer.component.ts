import { Component } from '@angular/core';
import { RetailerService } from '../../Service/retailer.service';
import { Observable, of } from 'rxjs';
import { Retailer } from '../model/Retailer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-retailer',
  templateUrl: './update-retailer.component.html',
  styleUrl: './update-retailer.component.css'
})
export class UpdateRetailerComponent {
  constructor(private service: RetailerService, private router: Router) { }
  selectedRetailer = new Retailer();

  public retailer: Observable<Retailer[]> = of([]);
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.retailer = this.service.getAllRetailer();
  }

  editRetailer(retailer: Retailer) {
    this.selectedRetailer = retailer;
    this.router.navigate(['/updateRetailerForm'], { state: { retailer: this.selectedRetailer } });
  }
}
