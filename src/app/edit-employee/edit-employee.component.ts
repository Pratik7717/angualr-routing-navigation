import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employees } from '../employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  email:string="";
  firstName:string="";
  lastName:string=""
  index=0;

  constructor(private router:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.index=this.active.snapshot.params.id;
    console.log('employees[this.index].email',employees[this.index].email);
    this.email=employees[this.index].email;
    this.firstName=employees[this.index].firstName;
    this.lastName=employees[this.index].lastName;
  }

  update():void{
    employees[this.index].email=this.email;
    employees[this.index].firstName=this.firstName;
    employees[this.index].lastName=this.lastName;
    this.router.navigate(['/dashboard']);

  }



}
