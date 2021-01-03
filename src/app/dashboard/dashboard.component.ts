import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:Array<object>=[];
  constructor(private router:Router, private authService: AuthService,private http:HttpClient) { }

  ngOnInit(): void {
    if(!this.authService.isLoggedIn())
      this.router.navigate(['/login']);
    this.getdata();
  }

  logout():void{
    // this.authService.isLoggedIn=false;
    this.authService.logout();
    this.router.navigate(['/']);

  }

  getdata():void{
    this.http.get('https://reqres.in/api/users?page=2').subscribe((res:any)=>{
      console.log('res',res);
      this.users=res.data;
      console.log('users',this.users)
    },(err:any)=>{
      console.log('err',err);
    });

  }



}
