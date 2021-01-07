import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { employees } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  email='';
  firstName='';
  lastName='';
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/']);
    }
  }

  add():void{
    employees.push({email:this.email,firstName:this.firstName,lastName:this.lastName});
    this.router.navigate(['/dashboard']);
  }

  cancle():void{
    this.router.navigate(['/dashboard'])
  }
}
