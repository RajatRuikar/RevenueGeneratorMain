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
  
  public admin: Observable<Admin[]> = of([]);
  
  onSubmit() {
    this.router.navigate(['admin']);
  }

  ngOnInit() {  
    this.getAll();
  }

  getAll() {
    this.admin = this.service.getAdminDetails();
  }

}
