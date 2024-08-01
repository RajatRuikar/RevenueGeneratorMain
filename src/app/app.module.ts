import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { TitleComponent } from './Component/title/title.component';
import { AdminComponent } from './Component/admin/admin.component';
import { CustomerComponent } from './Component/customer/customer.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { RetailerComponent } from './Component/retailer/retailer.component';
import { FooterComponent } from './Component/footer/footer.component';
import { RevenuComponent } from './Component/revenu/revenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { UpdateEmployeeFormComponent } from './Component/update-employee-form/update-employee-form.component';
import { UpdateRetailerFormComponent } from './Component/update-retailer-form/update-retailer-form.component';
import { NavbarcustomerComponent } from './Component/navbarcustomer/navbarcustomer.component';
import { CustomerprofiledeatilsComponent } from './Component/customerprofiledeatils/customerprofiledeatils.component';
import { CustomerproductsComponent } from './Component/customerproducts/customerproducts.component';
import { CustomerpastorderComponent } from './Component/customerpastorder/customerpastorder.component';
import { CustomercartdeatilsComponent } from './Component/customercartdeatils/customercartdeatils.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    AdminComponent,
    CustomerComponent,
    EmployeeComponent,
    RetailerComponent,
    FooterComponent,
    RevenuComponent,
    AdminDetailsComponent,
    UpdateAdminDetailsComponent,
    AddCustomerComponent,
    SearchCustomerComponent,
    GetAllCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    GetAllEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    AddRetailerComponent,
    SearchRetailerComponent,
    GetAllRetailerComponent,
    UpdateRetailerComponent,
    DeleteRetailerComponent,
    HomeComponent,
    UpdateCustomerFormComponent,
    UpdateEmployeeFormComponent,
    UpdateRetailerFormComponent,
    NavbarcustomerComponent,
    CustomerprofiledeatilsComponent,
    CustomerproductsComponent,
    CustomerpastorderComponent,
    CustomercartdeatilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
