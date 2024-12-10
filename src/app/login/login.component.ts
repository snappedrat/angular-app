import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl,FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form=new FormGroup({
    username:new FormControl('', Validators.required),
    password:new FormControl('',[Validators.required, Validators.minLength(6)]),
  });
  

constructor(private router: Router,private auth: AuthService){}

ngOnInit(): void {

  let userData = this.auth.getData()
  if(userData.username!='' && userData.password!=''){
    this.form.controls.username.setValue(userData.username)
    this.form.controls.password.setValue(userData.password)
  }
    
}

onsubmit(){
  if(this.form.valid){
    if(this.auth.login(this.form.value)){
      this.auth.setDataLogin(this.form.value)

    }
    else{
      this.auth.setData(this.form.value)
      this.router.navigate(['/register']) 
    }
  }
}
}