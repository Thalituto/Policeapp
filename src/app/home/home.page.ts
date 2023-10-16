import { Component, OnInit, NgZone } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitude:any;
  longitude:any;
  
  
  constructor(
    private geolocation: Geolocation,
  	private router: Router,
    private zone: NgZone,
    public toastCtrl: ToastController,
    
  ) {  this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
   }).catch((error) => {
     console.log('Error getting location', error);
   });
   
  
   }

 
  
   doRefresh(event) {
    console.log('Begin async operation');
    this.geolocation.getCurrentPosition().then(()=>{
      event.target.complete();
    },
    (error)=>{
      event.target.complete();
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
  

  Customer(){
  	this.router.navigate(['/customer']);
  }
  addCustomer(){
    this.router.navigate(['/addcustomer']);
  }
  options = {
    timeout: 10000, 
    enableHighAccuracy: true, 
    maximumAge: 3600
  };
  
  
    }

