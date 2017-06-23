import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeedataService } from '../app.service';


@Component({
    selector: 'leave',
    templateUrl: 'app/Home/app.leave.component.html',
    providers: [EmployeedataService]

})

export class LeaveComponent {
    private leaveHistory: any = [];
    private employees: any = [];

    constructor(private routes: Router, private _service: EmployeedataService) { }

    ngOnInit() {
        this._service.getEmployees()
            .subscribe(resEmployeeData => this.employees = resEmployeeData);
    }


    logout() {
        this.routes.navigate(['login'])
    }
    OnSubmit(value: any) {
        this.leaveHistory.push(value);
    }
}