import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppState } from 'src/store/AppState';
import { hide, show } from 'src/store/loading/loading.actions';
import { recoverPassword, recoverPasswordSuccess } from 'src/store/login/login.actions';
import { LoginState } from 'src/store/login/LoginState';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form!: FormGroup;

  constructor(private router: Router, private formbuilder: FormBuilder, private store: Store<AppState>, 
    private toastContoller : ToastController, private authService: AuthService) { }

  ngOnInit() {
    this.form=new LoginPageForm(this.formbuilder).createForm();
    this.store.select('login').subscribe(loginState => {
      this.onIsRecoveredPassword(loginState);
      this.onIsRecoveringPassword(loginState);
      
    })
  }

  private onIsRecoveringPassword(loginState: LoginState){

    if(loginState.isRecoveringPassword){
      this.store.dispatch(show());

      this.authService.recoverEmailPassword(this.form.get('email')?.value).subscribe(() =>{
        this.store.dispatch(recoverPasswordSuccess());
      })
    }

  }
  
  private async onIsRecoveredPassword(loginState: LoginState){
    if(loginState.isRecoveredPassword){
      this.store.dispatch(hide());
      const toaster = await this.toastContoller.create({
        position:"bottom",
        message:"Recovery email sent",
        color:"primary"
      });
      toaster.present();
    }

  }

  forgotEmailPassword(){
    this.store.dispatch(show());
    this.store.dispatch(recoverPassword());

    setTimeout(() => {
      this.store.dispatch(hide())
    }, 3000)
  }
  login(){
this.router.navigate(['home']);
  }

  register(){
    this.router.navigate(['register']);
  }
}
