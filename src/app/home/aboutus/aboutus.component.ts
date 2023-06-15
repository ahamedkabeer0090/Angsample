import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
redirectToregister: any;


  constructor(private router: Router) {}
  redirectTologin() {
    this.router.navigate(['/login'])

  this.redirectToregister()
    this.router.navigate(['/register'])
  }

  }



