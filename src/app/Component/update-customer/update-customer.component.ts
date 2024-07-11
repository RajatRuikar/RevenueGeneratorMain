import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerService } from '../../Service/customer.service';
import { Customer } from '../model/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  public customer: Observable<Customer[]> = of([]);
  selectedCustomer= new Customer();

  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customer = this.service.getAllCustomer();
  }

  editCustomer(customer: Customer) {
    this.selectedCustomer = customer;
    this.router.navigate(['/updateCustomerForm'], { state: { customer: this.selectedCustomer } });
  } 
}
