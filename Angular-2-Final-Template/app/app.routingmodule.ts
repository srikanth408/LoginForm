import { NgModule }      from '@angular/core';
import {RouterModule,Routes}    from '@angular/router';
import { AppHeader }   from './app.header';
import {LoginComponent} from './app.login.component';
import{ApplyLeaveComponent} from './app.applyleave.component';

const routes:Routes=[
     
    {path:'register',component:AppHeader},
    {path:'login', component : LoginComponent},
    { path: 'home', component:ApplyLeaveComponent}

];

@NgModule({
    imports:[
         RouterModule.forRoot(routes)],
         exports:[
             RouterModule
         ]

})

export class routerModuleComponent{}
export const routingComponents=[AppHeader,LoginComponent,ApplyLeaveComponent]