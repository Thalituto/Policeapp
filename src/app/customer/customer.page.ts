import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase ,AngularFireList} from '@angular/fire/database';
import { AuthenticateService } from '../services/authentication.service';
import { Profile } from 'src/environments/profile';
import { auth } from 'firebase';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  user: any;
  email: string = '';
 
  password: string = '';
  username: string = '';

  image: number;
 
  error: string;
  userWantsToSignup: boolean = false;
  linkError: string = '';
  userEmail: string

  

  constructor(
    
  	private router: Router,
    private afDatabase : AngularFireDatabase,
    private authService: AuthenticateService,
    public toastCtrl: ToastController,
    private navCtrl: NavController ,
    private fireauth: AngularFireAuth,
    private toastController: ToastController, 
    public loadingController: LoadingController
    
  ) { }

  ionViewDidEnter() {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    })
  }

  
  updateEmail() {
    this.user.updateEmail(this.email)
      .then(() => {
        this.email = '';
        this.presentToast('Email updated', false, 'bottom', 1000);
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  updateUsername() {
    this.user.updateProfile({
      displayName: this.username
    })
      .then((data) => {
        console.log(data);
        this.username = '';
        this.presentToast('Username updated', false, 'bottom', 1000);
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }


  


  updateImage() {

    this.user.updateProfile({
      photoURL: `https://picsum.photos/id/${this.image}/200/200`
    })
      .then((data) => {
        console.log(data);
        this.image = null;
        this.presentToast('Image updated', false, 'bottom', 1000);
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  updatePassword() {
    this.user.updatePassword(this.password)
      .then(() => {
        this.password = '';
        this.presentToast('Password updated', false, 'bottom', 1000);
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  
  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastController.create({
      message: message,
    
      position: position,
      duration: duration
    });
    toast.present();
  }
  ionViewLLload(){

}
  ngOnInit() {
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;

      } 
      
      
      else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    })
  }

  
  async prosesLogout(){
 
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }

}
