import {DatePipe} from '@angular/common';
import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name:'employeeFilterPipe'
})

export class EmployeeFilterPipe implements PipeTransform{
    transform(employees:any, startdate:string ,enddate:string){
       // console.log(startdate,enddate,employees);
     var filteredArray = new Array();
    var datepipe  = new DatePipe("en-US");
     startdate = datepipe .transform(startdate,'yyyy-MM-dd');
     if(employees && employees.length){
         employees.forEach(emps =>{
             var projectStartDate = datepipe .transform(emps.joiningDate, 'yyyy-MM-dd');
             var projectEndDate = datepipe .transform(emps.joiningDate, 'yyyy-MM-dd');
             //console.log(emps,projectStartDate,projectEndDate)
             if (projectStartDate >=startdate && projectEndDate <=enddate){
                 filteredArray.push(emps)
                // console.log(emps,projectStartDate,projectEndDate)
             }
         });
         return filteredArray
     }
}
}
