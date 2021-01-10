import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { employees } from '../employee'
import { employee } from '../EmployeeInterface';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //users=[];
  isLoading=false;
  employees:employee[]=[];
  constructor(private router:Router, private authService: AuthService,private http:HttpClient) { }

  ngOnInit(): void {
    if(!this.authService.isLoggedIn())
      this.router.navigate(['/login']);
    this.getdata();
    //Swal.fire('Hello World');to check if sweetalertbox is working or not.
  }

  logout():void{
    // this.authService.isLoggedIn=false;
    this.authService.logout();
    this.router.navigate(['/']);

  }

  getdata():void{
  //   this.http.get('https://reqres.in/api/users?page=2').subscribe((res:any)=>{
  //     console.log('res',res);
  //     this.users=res.data;
  //     console.log('users',this.users)
  //   },(err:any)=>{
  //     console.log('err',err);
  //   });
    this.isLoading=true;
    setTimeout(() => {
      this.isLoading=false;
      this.employees=employees;
    }, 3000);

   }

   delete(index: number):void{
     employees.splice(index,1);
   }

   logoutAlert():void{
    Swal.fire({
      icon: 'warning',
      title: 'Are You Sure?',
      text: 'You will be logged out of the system',
      showCancelButton: true,
      confirmButtonText: `logout`,
    }).then((result) => {
      if(result.value){
        this.logout();
      }
    })
   }





}
