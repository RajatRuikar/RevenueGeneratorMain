export class Employee{
    employeeId: number;
	employeeName: String;
	employeeRole: String;
	employeePhoneNumber: String;
	employeeEmail: String;
	employeeAddress: String;
	employeeSalary: number;
	dateOfJoining : String;

    constructor(){
        this.employeeId = 0;
        this.employeeName = "";
        this.employeeRole = "";
        this.employeePhoneNumber = "";
        this.employeeEmail = "";
        this.employeeAddress = "";
        this.employeeSalary = 0;
        this.dateOfJoining = "";
    }
}