import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //isLoggedIn=false;
  login():void{
    localStorage.setItem('isLoggedIn','true');
  }

  logout():void{
    localStorage.setItem('isLoggedIn','false');
  }

  isLoggedIn():Boolean{
    if(localStorage.getItem('isLoggedIn')=="true")
      return true;
    return false;
  }

  constructor() { }
}
