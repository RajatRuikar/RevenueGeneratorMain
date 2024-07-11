import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Service/employee.service';
import { Observable, of } from 'rxjs';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-get-all-employee',
  templateUrl: './get-all-employee.component.html',
  styleUrl: './get-all-employee.component.css'
})
export class GetAllEmployeeComponent implements OnInit {
  constructor(private service: EmployeeService,) { }

  public employee : Observable<Employee[]> = of([]);

  ngOnInit(): void {
      this.getAll();
  }

  getAll(){
    this.employee=this.service.getAllEmployee();
  }
}
