import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../../Service/employee.service';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrl: './search-employee.component.css'
})
export class SearchEmployeeComponent implements OnInit {
  constructor(private service: EmployeeService) { }

  public employee!: Observable<Employee[]>;

  public filterEmployee!: Employee[];

  public searchTerm: string = "";

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.employee = this.service.getAllEmployee();

    this.employee.subscribe(employee => {
      this.filterEmployee = employee;
    });
  }

  onSearch(event: Event) {
    event.preventDefault();
    this.employee.subscribe(emplyees => {
      if (!this.searchTerm.trim()) {
        this.filterEmployee = emplyees;
      } else {
        this.filterEmployee = emplyees.filter(employees =>
          this.matchSearchTerm(employees)
        );
      }
    })
    console.log(this.filterEmployee);
  }
  matchSearchTerm(employee: Employee): boolean {
    const searchTearm = this.searchTerm.toLowerCase();
    return (
      employee.employeeId.toString().toLowerCase().includes(searchTearm) || employee.employeeName.toLowerCase().includes(searchTearm) || employee.employeeRole.toLowerCase().includes(searchTearm) || employee.employeePhoneNumber.toLowerCase().includes(searchTearm) || employee.employeeAddress.toLowerCase().includes(searchTearm) || employee.employeeEmail.toLowerCase().includes(searchTearm) || employee.dateOfJoining.toLowerCase().includes(searchTearm) || employee.employeeSalary.toString().toLowerCase().includes(searchTearm)
    )
  }
}
