import{Component,OnInit} from '@angular/core';
import{Router} from '@angular/router';
import {EmployeedataService} from '../app.service';


@Component({
    selector:'login',
    templateUrl:'app/Login/app.login.component.html',
    providers:[EmployeedataService]


})

export class LoginComponent implements OnInit{
    data:any={};
 private employees:any=[];
 public currentUser:any=[];
   
constructor (private router:Router,private _service:EmployeedataService){}
     
ngOnInit(){
     this._service.getEmployees()
        .subscribe(resEmployeeData =>this.employees=resEmployeeData);
       }
loginSubmit(value:any){
    this.employees.map(item=>{
        if (item.username === value.username && item.password === value.password){
            this.router.navigate(['leave']);
            }
         this.currentUser=item.username;
            console.log( this.currentUser);
    });
    
}
    

}