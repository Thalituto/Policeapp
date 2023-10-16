
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  googleProvider= new firebase.auth.GoogleAuthProvider();
  usernameText: string;
  usernameAvailable: boolean;
  constructor(
   
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }


  validation_messages = {
    'email': [
      { type: 'required', message: 'Email est important.' },
      { type: 'pattern', message: 'Svp enter un email valide.' }
    ],
    'password': [
      { type: 'required', message: 'Le Password est important.' },
      { type: 'minlength', message: 'Le Password doit depasser 5 caractères.' }
    ]
  };


  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.navCtrl.navigateRoot('/index');
      }, err => {
        this.errorMessage = err.message;
      })
  }
  

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

  onSignInwithgooglePopUp(){

    firebase.auth().signInWithPopup(this.googleProvider).then((result)=>{
    
     
        console.log(result.user);
        this.navCtrl.navigateForward('/index');
     
      
    })
    
    
      }
      forget(){
       this.navCtrl.navigateForward('/forgot');
     } 
      
}
