
import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { EmployeeFilterPipe } from '../employee-filter.pipe';
 

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  Employee: any = [];


 filteredArrayByDate = new Array();

  constructor(public restApi: RestApiService,private empfilterpipe:EmployeeFilterPipe) { }

  ngOnInit() {
   this.loadEmployees();
  }
  clearFilter(){
     this.loadEmployees();
  }
  getFilteredData(startDate:string,endDate:string):void{
    this.filteredArrayByDate = this.empfilterpipe.transform(this.Employee,startDate,endDate)
    console.log(this.filteredArrayByDate);
    this.Employee = this.filteredArrayByDate;
  }

  loadEmployees() {
    return this.restApi.getEmployees().subscribe( data => this.Employee = data);
  }

  deleteEmployee(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.restApi.deleteEmployee(id)
        .subscribe(data => this.loadEmployees()),(window.alert('employee deleted'));
    }
  }

}
