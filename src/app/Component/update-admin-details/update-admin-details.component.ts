import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AdminService } from '../../Service/admin.service';
import { Admin } from '../model/Admin';

@Component({
  selector: 'app-update-admin-details',
  templateUrl: './update-admin-details.component.html',
  styleUrls: ['./update-admin-details.component.css'] // Update if you have CSS file
})
export class UpdateAdminDetailsComponent implements OnInit {
  public admin: Observable<Admin[]> = of([]);
  private adminList: Admin[] = [];

  constructor(private service: AdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service.getAdminDetails().subscribe((admins: Admin[]) => {
      this.adminList = admins;
      this.admin = of(this.adminList);
    });
  }

  onSubmit() {
    this.adminList.forEach(admin => {
      this.updateAdmin(admin);
    });
  }

  updateAdmin(admin: Admin) {
    this.service.updateAdminDetail(admin).subscribe(
      response => {
        console.log('Admin details updated successfully', response);
        this.router.navigate(['/admin']);
      },
      error => {
        console.error('Error updating admin details', error);
      }
    );
  }
}
