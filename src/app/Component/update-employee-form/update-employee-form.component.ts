import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/Employee';
import { EmployeeService } from '../../Service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee-form',
  templateUrl: './update-employee-form.component.html',
  styleUrl: './update-employee-form.component.css'
})
export class UpdateEmployeeFormComponent implements OnInit {
  updateForm!: FormGroup;
  employee = new Employee();

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.employee = navigation.extras.state['employee'];
    } else {
      console.log(this.employee);
    }
  }

  ngOnInit() {
    if (this.employee) {
      this.updateForm = this.fb.group({
        employeeId: [this.employee.employeeId, Validators.required],
        employeeName: [this.employee.employeeName, Validators.required],
        employeeRole: [this.employee.employeeRole, Validators.required],
        employeePhoneNumber: [this.employee.employeePhoneNumber, Validators.required],
        employeeEmail: [this.employee.employeeEmail, Validators.required],
        employeeAddress: [this.employee.employeeAddress, Validators.required],
        employeeSalary: [this.employee.employeeSalary, Validators.required],
        dateOfJoining: [this.employee.dateOfJoining, Validators.required]
      });
    } else {
      this.updateForm = this.fb.group({
        employeeId: ['', Validators.required],
        employeeName: ['', Validators.required],
        employeeRole: ['', Validators.required],
        employeePhoneNumber: ['', Validators.required],
        employeeEmail: ['', Validators.required],
        employeeAddress: ['', Validators.required],
        employeeSalary: ['', Validators.required],
        dateOfJoining: ['', Validators.required]
      });
    }
  }
  
  onSubmit(): void {
    if (this.updateForm.valid) {
      this.service.updateEmployee(this.updateForm.value, this.employee.employeeId).subscribe(response => {
        // Handle the response
        alert("Record Updated Successfully");
        this.router.navigate(['/updateEmployee']);
      });
    }
  }
}
