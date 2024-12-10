import { Injectable } from '@angular/core';

export interface login{
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginState: boolean = false
  constructor() { }
  isLoggedIn(){
    const username = localStorage.getItem("username")
    return username!==null && username.trim()!==''
  }
}
