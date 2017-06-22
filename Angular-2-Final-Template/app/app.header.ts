import { Component } from '@angular/core';


@Component({
    selector:'main',
    templateUrl:'app/app.header.html',
 
})

export class AppHeader {
    onSubmit(value:any){
console.log(value);
  }
    
}