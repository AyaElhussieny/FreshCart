import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  isLoading : boolean = false;
  apiError : string ='';
  isNotValidForm : boolean = false;

constructor(private _authService:AuthService , private _router:Router ) {}



registerForm: FormGroup = new FormGroup({

  name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email: new FormControl("",[Validators.required,Validators.email]),
  password: new FormControl("", [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)]),
  rePassword: new FormControl("", [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/)]),

  phone: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(13)])

},{
  validators : this.validateRePassword
});




register(form:FormGroup){
  console.log(form);

  if(form.valid){

    this.isLoading = true;
    this._authService.register(form.value).subscribe({
      next:(res : any)=>{

        this.isLoading = false;

       
        this._router.navigate(['/Login'])
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



validateRePassword(registerForm : any) : any{

  let passwordControl = registerForm.get("password").value;
  let rePasswordControl = registerForm.get("rePassword").value;

  if(passwordControl == rePasswordControl){
    return null;
  }else{
    rePasswordControl.setErrors({rePasswordNotMatch :"Password and Repassword should be matched"});

    return {rePasswordNotMatch :"Password and Repassword should be matched"};
  }
}
}
















