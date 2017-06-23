import{Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class EmployeedataService{
    private _url:string='app/Apidata/app.employeedata.json'

constructor(
    private _router: Router,private _http: Http){}
    
    
    getEmployees(){
      return this._http.get(this._url)
      .map((response:Response)=>response.json());
      
    }

}
