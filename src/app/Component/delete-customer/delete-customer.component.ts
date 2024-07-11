import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerService } from '../../Service/customer.service';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  public customer: Observable<Customer[]> = of([]);

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customer = this.service.getAllCustomer();
  }

  onDelete(id: number) {
    if (window.confirm('Are you sure you want to delete this Customer?')) {
      this.service.deleteCustomer(id).subscribe(() => {
        this.getAll();
      });
    }
  }
}
