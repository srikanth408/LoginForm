import { Component } from '@angular/core';
import {AuthenticationService} from './authentication.service';


@Component({
    selector:'Apply-Leave',
    templateUrl:'app/app.applyleave.component.html',
     providers: [AuthenticationService],
 
})

export class ApplyLeaveComponent {
     constructor(private _service:AuthenticationService){}
      public employees =[];
       public leaveHistory=[];
     
 
    ngOnInit(){
        this._service.checkCredentials();
        this._service.getEmployees()
        .subscribe(resEmployeeData =>this.employees=resEmployeeData);
    }
 
    logout() {
        this._service.logout();
    }
    OnSubmit(value){
console.log(value);
this.leaveHistory.push(value);
    }
   
      
}