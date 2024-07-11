import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Retailer } from '../model/Retailer';
import { Router } from '@angular/router';
import { RetailerService } from '../../Service/retailer.service';

@Component({
  selector: 'app-update-retailer-form',
  templateUrl: './update-retailer-form.component.html',
  styleUrl: './update-retailer-form.component.css'
})
export class UpdateRetailerFormComponent implements OnInit {
  updateForm!: FormGroup;
  retailer = new Retailer();

  constructor(
    private fb: FormBuilder,
    private service: RetailerService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.retailer = navigation.extras.state['retailer'];
    } else {
      console.log(this.retailer);
    }
  }

  ngOnInit(){
      if(this.retailer){
        this.updateForm = this.fb.group({
          retailerId: [this.retailer.retailerId,  Validators.required],
          retailerName: [this.retailer.retailerName, Validators.required],
          retailerContactNumber: [this.retailer.retailerContactNumber, Validators.required],
          retailerEmail : [this.retailer.retailerEmail, Validators.required],
          retailerAdditionalDetails : [this.retailer.retailerAdditionalDetails, Validators.required]
          });
      } else {
        this.updateForm = this.fb.group({
          retailerId: ['',  Validators.required],
          retailerName: ['', Validators.required],
          retailerContactNumber: ['', Validators.required],
          retailerEmail : ['', Validators.required],
          retailerAdditionalDetails : ['', Validators.required]
          });
      }
  }

  onSubmit(){
    if(this.updateForm.valid){
      this.service.updateRetailer(this.updateForm.value,this.retailer.retailerId).subscribe(response=>{
        alert("Record Updated Successfully");
        this.router.navigate(['/updateRetailer']);
      });
    }
  }
}
