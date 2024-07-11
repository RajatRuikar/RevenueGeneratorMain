import { Component } from '@angular/core';
import { EmployeeService } from '../../Service/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  constructor(private service: EmployeeService, private router: Router) { }

  employee = new Employee();

  onSubmit() {
    this.service.createEmployee(this.employee).subscribe({
      next: (data) => {
        this.router.navigate(['/employee']);
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }

}
