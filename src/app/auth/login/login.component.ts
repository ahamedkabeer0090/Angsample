import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  constructor(private router: Router){}

  userName : string ='';
  pswd : string = '';
  redirectToregister(){
    this.router.navigate(['/register']);
  }

  userLogin(){
    if(this.userName == 'Solomon' && this.pswd == '123')
    {
      sessionStorage.setItem("User", this.userName);
      sessionStorage.setItem("Group", "Admin");
      this.router.navigate(['/bill']);
    }
    if(this.userName == 'Kabeer' && this.pswd == '789')
    {
      sessionStorage.setItem("User", this.userName);
      sessionStorage.setItem("Group", "Manager");
      this.router.navigate(['/bill']);
    }
    if(this.userName == 'Jagan' && this.pswd == '456')
    {
      sessionStorage.setItem("User", this.userName);
      sessionStorage.setItem("Group", "Guest");
      this.router.navigate(['/bill']);
    }
  }

}
