import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface login{
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any = {username: '', password: ''}
  mockUsers:any = [
    { username: 'john_doe', password: 'password123', role: 'user' },
    { username: 'jane_doe', password: 'securePassword!', role: 'moderator' },
    { username: 'admin_user', password: 'admin@2024', role: 'admin' }, 
    { username: 'test1', password: 'test123', role: 'admin' }, 
  ];
  loginState: boolean = false
  constructor(private router: Router) { }

  login(data:any){
    let user = this.mockUsers.find((u:any)=> u.username === data.username && u.password === data.password)
    console.log(user);
    this.loginState = !!user
    return !!user
 }

  setData(data:any){
    this.userData.username = data.username
    this.userData.password = data.password
    // this.setLocalStorage(data)
    
  }

  setLocalStorage(data:login){
    localStorage.setItem("username", data.username)
    localStorage.setItem("password", data.password)
  }

  setDataLogin(data:any){
    this.setLocalStorage(data)
    console.log(localStorage.getItem("username"))
    this.router.navigate(['/home']) 
  }

  getData():{username:string, password:string}{
    return this.userData;
  }

  addUser(data:any){
    console.log(data)
    this.mockUsers.push({username: data.username, password: data.password})
    console.log(this.mockUsers)
  }

  isLoggedIn(){
    const username = localStorage.getItem("username")
    return username!==null && username.trim()!==''
  }
}
