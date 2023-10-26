import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetpasswordService } from 'src/app/shared/services/forgetpassword.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
 
  sectionOne:boolean =true;
  sectionTwo:boolean =false;
  sectionThree:boolean =false;
  email :string  ='';
  successMsg : string='';
  errorMsg: string='';

  forgetPassForm: FormGroup = new FormGroup({

    email: new FormControl("",[Validators.required,Validators.email]),
  });

  resetCodeForm: FormGroup = new FormGroup({

    resetCode: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(6)]),

  });


  resetPasswordForm: FormGroup = new FormGroup({

    // email: new FormControl("",[Validators.required,Validators.email]),
    newPassword: new FormControl("", [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,10}$/),])
  });

 constructor(private _forgetpasswordService:ForgetpasswordService , private _router:Router){}

  forgetPassword(forgetPassForm:FormGroup):void{
 
    this.errorMsg='';
    this.successMsg ='';
    let userEmail =forgetPassForm.value;
    this.email =userEmail.email;
    this._forgetpasswordService.forgetPassword(userEmail).subscribe({
      next:(res:any) =>{
        console.log(res);
        this.successMsg =res.message;
        this.sectionOne =false;
        this.sectionTwo =true;
        this.sectionThree =false;
        
      },
      error:(err)=>{
        this.errorMsg =err.error.message;

      }
    })
  }



  resetCode(resetCodeForm :FormGroup){
    this.errorMsg='';
    this.successMsg ='';
    let resetCode =resetCodeForm.value;
    this._forgetpasswordService.resetCode(resetCode).subscribe({
      next:(res)=>{
        console.log(res);
        this.successMsg =res.status;
        this.sectionOne =false;
        this.sectionTwo =false;
        this.sectionThree =true;
      },
      error:(err)=>{
        this.errorMsg =err.error.message;

      }
    });
  }



  resetPassword(resetPasswordForm :FormGroup){

    this.errorMsg='';
    this.successMsg ='';
    let rePasswordForm =resetPasswordForm.value;

    //push emaail in form
    rePasswordForm.email = this.email;

    this._forgetpasswordService.resetPassword(rePasswordForm).subscribe({
      next:(res :any)=>{
        console.log(res);
        this.successMsg =res.status;
          this._router.navigate(['/Login']);
        },
      error:(err)=>{
        this.errorMsg =err.error.message;

      }
    });

  }
}
