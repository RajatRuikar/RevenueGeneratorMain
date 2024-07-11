import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../Service/customer.service';
import { Observable, of } from 'rxjs';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-get-all-customer',
  templateUrl: './get-all-customer.component.html',
  styleUrl: './get-all-customer.component.css'
})
export class GetAllCustomerComponent implements OnInit {
  constructor(private service: CustomerService) { }

  public customer: Observable<Customer[]> = of([]);

  ngOnInit() {  
    this.getAll();
  }

  getAll() {
    this.customer = this.service.getAllCustomer();
  }

}
