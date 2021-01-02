import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName='';
  password='';
  fname='';
  lname='';

  invalidFields=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  register():void{
    this.validation();
    //this.router.navigate(['/login']);
    console.log('Registration succesful')
  }

  validation():boolean{
    if(this.userName=='' || this.password=='' || this.fname=='' || this.lname==''){
      this.invalidFields=true;
      return false;
    }
    return true;
  }


}
