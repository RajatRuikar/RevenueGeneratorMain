import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../../Service/employee.service';
import { Employee } from '../model/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  constructor(private service: EmployeeService, private router: Router) { }
  selectedEmployee = new Employee();

  public employee: Observable<Employee[]> = of([]);

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.employee = this.service.getAllEmployee();
  }

  editEmployee(employee: Employee) {
    this.selectedEmployee = employee;
    this.router.navigate(['/updateEmployeeForm'], { state: { employee: this.selectedEmployee } });
  }
}
