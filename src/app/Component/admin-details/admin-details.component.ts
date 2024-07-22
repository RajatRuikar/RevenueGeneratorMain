import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Service/admin.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Admin } from '../model/Admin';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.css'
})
export class AdminDetailsComponent implements OnInit{
  constructor(private service: AdminService, private router:Router) { }
  
  admin!: Observable<Admin>;
  
  onSubmit() {
    this.router.navigate(['admin']);
  }

  ngOnInit() {  
    this.getAll();
  }

  getAll() {
    // console.log(this.admin);
    this.admin = this.service.getAdminDetails();
    // console.log(this.admin);
  }

}
