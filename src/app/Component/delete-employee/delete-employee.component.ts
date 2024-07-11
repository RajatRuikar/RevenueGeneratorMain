import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../../Service/employee.service';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent {
  constructor(private service: EmployeeService) { }

  public employee : Observable<Employee[]> = of([]);

  ngOnInit(): void {
      this.getAll();
  }

  getAll(){
    this.employee=this.service.getAllEmployee();
  }

  onDelete(id: number) {
    if (window.confirm('Are you sure you want to delete this Employee?')) {
      this.service.deleteEmployee(id).subscribe(() => {
        this.getAll();
      });
    }
  }
  
}
