import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Component/admin/admin.component';
import { CustomerComponent } from './Component/customer/customer.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { RetailerComponent } from './Component/retailer/retailer.component';
import { RevenuComponent } from './Component/revenu/revenu.component';
import { AdminDetailsComponent } from './Component/admin-details/admin-details.component';
import { UpdateAdminDetailsComponent } from './Component/update-admin-details/update-admin-details.component';
import { AddCustomerComponent } from './Component/add-customer/add-customer.component';
import { SearchCustomerComponent } from './Component/search-customer/search-customer.component';
import { GetAllCustomerComponent } from './Component/get-all-customer/get-all-customer.component';
import { UpdateCustomerComponent } from './Component/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './Component/delete-customer/delete-customer.component';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { SearchEmployeeComponent } from './Component/search-employee/search-employee.component';
import { GetAllEmployeeComponent } from './Component/get-all-employee/get-all-employee.component';
import { UpdateEmployeeComponent } from './Component/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './Component/delete-employee/delete-employee.component';
import { AddRetailerComponent } from './Component/add-retailer/add-retailer.component';
import { SearchRetailerComponent } from './Component/search-retailer/search-retailer.component';
import { GetAllRetailerComponent } from './Component/get-all-retailer/get-all-retailer.component';
import { UpdateRetailerComponent } from './Component/update-retailer/update-retailer.component';
import { DeleteRetailerComponent } from './Component/delete-retailer/delete-retailer.component';
import { HomeComponent } from './Component/home/home.component';
import { UpdateCustomerFormComponent } from './Component/update-customer-form/update-customer-form.component';
import { UpdateRetailerFormComponent } from './Component/update-retailer-form/update-retailer-form.component';
import { UpdateEmployeeFormComponent } from './Component/update-employee-form/update-employee-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }, {
    path: 'customer',
    component: CustomerComponent
  }, {
    path: 'employee',
    component: EmployeeComponent
  }, {
    path: 'retailer',
    component: RetailerComponent
  }, {
    path: 'revenue',
    component: RevenuComponent
  }, {
    path: 'adminDetail',
    component: AdminDetailsComponent
  },
  {
    path: 'updateAdminDetail',
    component: UpdateAdminDetailsComponent
  }, {
    path: 'addCustomer',
    component: AddCustomerComponent
  }, {
    path: 'searchCustomer',
    component: SearchCustomerComponent
  }, {
    path: 'getAllCustomer',
    component: GetAllCustomerComponent
  }, {
    path: 'updateCustomer',
    component: UpdateCustomerComponent
  }, {
    path: 'deleteCustomer',
    component: DeleteCustomerComponent
  }, {
    path: 'addEmployee',
    component: AddEmployeeComponent
  }, {
    path: 'searchEmployee',
    component: SearchEmployeeComponent
  }, {
    path: 'getAllEmployee',
    component: GetAllEmployeeComponent
  }, {
    path: 'updateEmployee',
    component: UpdateEmployeeComponent
  }, {
    path: 'deleteEmployee',
    component: DeleteEmployeeComponent
  }, {
    path: 'addRetailer',
    component: AddRetailerComponent
  }, {
    path: 'searchRetailer',
    component: SearchRetailerComponent
  }, {
    path: 'getAllRetailer',
    component: GetAllRetailerComponent
  }, {
    path: 'updateRetailer',
    component: UpdateRetailerComponent
  }, {
    path: 'deleteRetailer',
    component: DeleteRetailerComponent
  },{
    path: 'updateCustomerForm',
    component: UpdateCustomerFormComponent
  },{
    path: 'updateRetailerForm',
    component : UpdateRetailerFormComponent
  },{
    path: 'updateEmployeeForm',
    component : UpdateEmployeeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
