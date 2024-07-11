import { Component } from '@angular/core';
import { Retailer } from '../model/Retailer';
import { Router } from '@angular/router';
import { RetailerService } from '../../Service/retailer.service';

@Component({
  selector: 'app-add-retailer',
  templateUrl: './add-retailer.component.html',
  styleUrl: './add-retailer.component.css'
})
export class AddRetailerComponent {

  constructor(private service: RetailerService, private router: Router) { }
  retailer = new Retailer();

  onSubmit(){
    this.service.createRetailer(this.retailer).subscribe({
      next:(data)=>{
        this.router.navigate(['/retailer']);
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }
}
