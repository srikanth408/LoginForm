import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/app.login.component';
import { LeaveComponent } from './Home/app.leave.component'

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'leave', component: LeaveComponent }

];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingComponent { }
export const routingModuleComponent = [LoginComponent, LeaveComponent]

