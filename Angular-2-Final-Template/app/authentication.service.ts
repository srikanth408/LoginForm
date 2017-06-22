import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
 
export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23')
];
 
@Injectable()
export class AuthenticationService {
  private _url:string="app/ApiData/Employeedata.json"
  
constructor(
    private _router: Router,private _http: Http){}
    getEmployees(){
      return this._http.get(this._url)
      .map((response:Response)=>response.json());
    }
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }
 
  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.email);
      this._router.navigate(['home']);      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  } 
}