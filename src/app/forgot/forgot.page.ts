
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage {
  
  email: string = '';
  password: string = '';
  error: string = '';
  username: string = '';
  image: number;
  constructor(private fireauth: AngularFireAuth, private router: Router, private toastController: ToastController, public loadingController: LoadingController,
    public alertController: AlertController) {

  }

  async openLoader() {
    const loading = await this.loadingController.create({
      message: 'Please Wait ...',
      duration: 2000
    });
    await loading.present();
  }
  async closeLoading() {
    return await this.loadingController.dismiss();
  }

  recover() {
    
    this.fireauth.sendPasswordResetEmail(this.email)
      .then(data => {
        console.log(data);
        this.presentToast('Password reset email sent', false, 'bottom', 1000);
        this.router.navigateByUrl('/login');
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

}
