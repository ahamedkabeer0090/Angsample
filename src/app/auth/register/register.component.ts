import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
redirectTologin() {
throw new Error('Method not implemented.');
}
  userName: string = '';
  passWord: any = '';
  cpassWord: any = '';
  email: any = '';
  mobileNumber: string = '';
  fname: string = '';
  lname: string = '';

  result: string = '';
  validation() {



    var Usercheck = /^[A-Za-z@]{5,20}$/;
    var Passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var emailcheck = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var MobileNumbercheck = /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/;
    var Fnamecheck = /^[A-Za-z]{5,8}$/;
    var Lnamecheck = /^[A-Za-z]{5,8}$/;


    this.result = "";
    if (!Usercheck.test(this.userName)) {
      this.result = "*Username is invalid*"
    }
    else if (!Passwordcheck.test(this.passWord)) {
      this.result = "*Password Should be 6-12 Char*"
    }
    else if (!this.cpassWord.match(this.passWord)) {
      this.result = "*Password doesnt match*"
    }
    else if (!emailcheck.test(this.email)) {
      this.result = "*Enter Valid Mail lD*"
    }
    else if (!MobileNumbercheck.test(this.mobileNumber)) {
      this.result = "*Enter Valid Mobile Number*"
    }
    else if (!Fnamecheck.test(this.fname)) {
      this.result = "*Firstname is Invalid*"
    }
    else if (!Lnamecheck.test(this.lname)) {
      this.result = "*Lastname is Invalid*"
    }
  }
}
