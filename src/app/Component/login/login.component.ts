import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin! : FormGroup;

  constructor(private loginService : LoginService,
              private router : Router,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formLogin=this.formBuilder.group({
      userName:this.formBuilder.control(""),
      password:this.formBuilder.control("")
    })
  }


  handleLogin() {
    let userName=this.formLogin.value.userName;
    let password=this.formLogin.value.password;
    this.loginService.login(userName,password).subscribe({
      next:data=>{
        console.log(data);
        this.loginService.loadProfile(data);
        this.router.navigateByUrl("/admin");
      },
      error : error=>{
        console.log(error);
      }
    })
  }

}
