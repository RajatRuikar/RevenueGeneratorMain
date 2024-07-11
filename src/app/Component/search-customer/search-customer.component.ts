import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../Service/customer.service';
import { map, Observable, of } from 'rxjs';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {
  constructor(private service: CustomerService) { }
 
  public customer!: Observable<Customer[]>;
  public filteredCustomers!: Customer[];
  public searchTerm: String = '';

  ngOnInit() {  
    this.loadCustomers();
  }

  loadCustomers() {
    this.customer = this.service.getAllCustomer();
    this.customer.subscribe(customers => {
      this.filteredCustomers = customers; // Initialize filteredCustomers with all customers
    });
  }

  onSearch(event: Event) {
    event.preventDefault();
    this.customer.subscribe(customers => {
      if (!this.searchTerm.trim()) {
        this.filteredCustomers = customers;
      } else {
        this.filteredCustomers = customers.filter(customer =>
          this.matchSearchTerm(customer)  
        );
      }
    });
  }         

  matchSearchTerm(customer: Customer): boolean {
    const searchTerm = this.searchTerm.toLowerCase();
    return (
      customer.customerId.toString().toLowerCase().includes(searchTerm) ||
      customer.customerName.toLowerCase().includes(searchTerm) ||
      customer.customerPhoneNumber.toLowerCase().includes(searchTerm) ||
      customer.customerEmail.toLowerCase().includes(searchTerm) ||
      customer.customerAddress.toLowerCase().includes(searchTerm)
    );
  }
}
