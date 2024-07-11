import { Component } from '@angular/core';
import { Customer } from '../model/Customer';
import { Router } from '@angular/router';
import { CustomerService } from '../../Service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  constructor(private service: CustomerService, private router: Router) {}

  customer = new Customer();

onSubmit() {
  this.service.createCustomer(this.customer).subscribe({
    next:(data)=>{
      console.log(this.customer);
      this.router.navigate(['/customer']);
    },
    error:(err)=>{
      console.error(err);
    }
  })
}

}
