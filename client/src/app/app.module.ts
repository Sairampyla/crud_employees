import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
//import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


import { AppComponent } from './app.component';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeFilterPipe } from './employee-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesCreateComponent,
    EmployeesEditComponent,
    EmployeesListComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //BsDatepickerModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [EmployeeFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
