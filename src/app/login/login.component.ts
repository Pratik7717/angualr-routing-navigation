import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName='';
  password='';

  invalidUname=false;
  invalidPass=false;

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn())
      this.router.navigate(['/dashboard']);
  }

  login():void{
    this.validation();
    if(this.userName=='admin' && this.password=='admin'){
      // this.authService.isLoggedIn=true;
      this.authService.login();
      this.router.navigate(['/dashboard']);
    }

  }

  validation():void{
    if(this.userName!='admin')
    {
      this.invalidUname=true;
    }
    if(this.password!='admin')
    {
      this.invalidPass=true;
    }
  }

}
