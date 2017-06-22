import { Component, ElementRef } from '@angular/core';
import { AuthenticationService, User } from './authentication.service'

@Component({
    selector: 'Login',
    templateUrl: 'app/app.login.component.html',
    providers: [AuthenticationService],

})

export class LoginComponent {
    public user = new User('', '');
    public errorMsg = '';

    constructor(
        private _service: AuthenticationService) { }

    login(opt: any) {
        this.user = new User(opt.email, opt.password);
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    }

}