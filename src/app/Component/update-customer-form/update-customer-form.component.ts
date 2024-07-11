import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../Service/customer.service';
import { Customer } from '../model/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateCustomerForm',
  templateUrl: './update-customer-form.component.html',
  styleUrl: './update-customer-form.component.css'
})
export class UpdateCustomerFormComponent implements OnInit {
  updateForm!: FormGroup;
  customer = new Customer();

  constructor(
    private fb: FormBuilder,
    private service: CustomerService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.customer = navigation.extras.state['customer'];
    } else {
      console.log(this.customer);
    }
  }

  ngOnInit() {
    if (this.customer) {
      this.updateForm = this.fb.group({
        customerId: [this.customer.customerId, Validators.required],
        customerName: [this.customer.customerName, Validators.required],
        customerPhoneNumber: [this.customer.customerPhoneNumber, Validators.required],
        customerEmail: [this.customer.customerEmail, [Validators.required, Validators.email]],
        customerAddress: [this.customer.customerAddress, Validators.required]
      });
    } else {
      // Handle the case where customer data is not available
      this.updateForm = this.fb.group({
        customerId: ['', Validators.required],
        customerName: ['', Validators.required],
        customerPhoneNumber: ['', Validators.required],
        customerEmail: ['', [Validators.required, Validators.email]],
        customerAddress: ['', Validators.required]
      });
    }
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      this.service.updateCustomer(this.updateForm.value, this.customer.customerId).subscribe(response => {
        // Handle the response
        alert("Record Updated Successfully");
        this.router.navigate(['/updateCustomer']);
      });
    }
  }
}
