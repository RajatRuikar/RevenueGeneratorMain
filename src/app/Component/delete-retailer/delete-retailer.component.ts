import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RetailerService } from '../../Service/retailer.service';
import { Retailer } from '../model/Retailer';

@Component({
  selector: 'app-delete-retailer',
  templateUrl: './delete-retailer.component.html',
  styleUrl: './delete-retailer.component.css'
})
export class DeleteRetailerComponent {
  constructor(private service: RetailerService) { }

  public retailer: Observable<Retailer[]> = of([]);
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.retailer = this.service.getAllRetailer();
  }

  onDelete(id: number) {
    if (window.confirm('Are you sure you want to delete this Retailer?')) {
      this.service.deleteRetailer(id).subscribe(() => {
        this.getAll();
      });
    }
  }
}
