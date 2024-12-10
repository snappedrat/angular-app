import { Component } from '@angular/core';
import{FormBuilder,FormControl,FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form=new FormGroup({
    username:new FormControl('', Validators.required),
    password:new FormControl('',[Validators.required, Validators.minLength(8)]),
  });
  

constructor(private router: Router){}
onsubmit(){
  if(this.form.valid){
 localStorage.setItem("username",this.form.get('username')?.value as string)
 localStorage.setItem("password",this.form.get('password')?.value as string)
  this.router.navigate(['/component5'])
  
}else{
alert("Invalid credentials");
}
}
}