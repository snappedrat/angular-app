import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { provideToastr, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl('', [Validators.required, this.passwordMatchValidator.bind(this)])
  });



  constructor(private formbuilder: FormBuilder, 
              private auth:AuthService, 
              private toastr: ToastrService, 
              private router: Router){

  }
  routeData: any;
  ngOnInit(): void {
      this.routeData = this.auth.getData()
      console.log(this.routeData);
      if(this.routeData.username != '' && this.routeData.password!=''){
        this.form.controls.username.setValue(this.routeData.username)
        this.form.controls.password.setValue(this.routeData.password)
        this.toastr.show("Please register as new user","Message", {positionClass: "toast-top-right"})
      }
  }
  onSubmit(){
    console.log(this.form.value)
    window.alert("Form submitted")
    this.auth.setData(this.form.value)
    this.auth.addUser(this.form.value)
    let x = this.form?.get('username')?.value as string
    localStorage.setItem("username", x)
    this.router.navigate(['/login'])
  }

  passwordMatchValidator(control: FormControl): {[key:string]: boolean} | null{
    if(this.form){
      let password = this.form.get('password')?.value;
      if(password !== control.value){
          return {passwordMismatch: true}
      }
    }
      return null
  }
}
