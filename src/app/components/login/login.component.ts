import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoading : boolean = false;
  apiError : string ='';
  isNotValidForm : boolean = false;
  

constructor(private _authService:AuthService , private _router:Router ) {}



loginForm: FormGroup = new FormGroup({

  email: new FormControl("",[Validators.required,Validators.email]),
  password: new FormControl("", [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/),])
})




login(form:FormGroup){

  if(form.valid){

    this.isLoading = true;
    this._authService.login(form.value).subscribe({
      next:(data : any)=>{
        console.log(data);

        this.isLoading = false;
        
        localStorage.setItem("userToken",data.token)

          this._authService.getUserData();          
       
        this._router.navigate(['/Home'])
      },
      error:(err)=>{
        
        this.apiError =err.error.message;
        

      }
    })
    
  }else{
    //form is not valid 
    this.isNotValidForm = true;

  }  
}
}
