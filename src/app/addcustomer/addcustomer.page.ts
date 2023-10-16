import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';


import { IonDatetime, NavController, NavParams, ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { Item } from 'src/models/item/item.model';
import { UrugencesService } from '../services/urugences/urugences.service';
import { AngularFireDatabase ,AngularFireList} from '@angular/fire/database';
import { AuthenticateService } from '../services/authentication.service';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';
import { timestamp } from 'rxjs/operators';
import * as firebase from 'firebase';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';


@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})



export class AddcustomerPage implements OnInit {



datePipeString : string;
  error: string;
  userWantsToSignup: boolean = false;
  linkError: string = '';
  userEmail: string
  user: any;
  username: string = '';
 
  item:Item=  {
   nom:"",
    motif:"",
    latitude:undefined,
    longitude:undefined,
    date:undefined
  }
  props: any;
  

  ionViewDidEnter() {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    })
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
  	 //*affectation de la position//

  
   //*username*//
 
	
  //*declaration*//
  

  constructor(
  private urugences:UrugencesService,
    private actRoute: ActivatedRoute,
    public toastCtrl: ToastController,
    private fireauth: AngularFireAuth,
    private toastController: ToastController, 
    public loadingController: LoadingController,
    private authService: AuthenticateService,
    private datePipe: DatePipe,
    private navCtrl: NavController ,
    private geolocation: Geolocation,
    
  ) {
    
    
    
    
    
    this.geolocation.getCurrentPosition().then((resp) => {
    this.item.latitude = resp.coords.latitude;
    this.item.longitude = resp.coords.longitude;
   }).catch((error) => {
     console.log('Error getting location', error);
   });
    this.datePipeString = datePipe.transform(Date.now(),'yyyy-MM-dd, HH:mm:ss');}

 //*Urugences*//

    // validation done
  
  doRefresh(event) {
	console.log('Begin async operation');
	this.geolocation.getCurrentPosition().then().then(()=>{
		event.target.complete();
	},
	(error)=>{
		event.target.complete();
	})
	
  }
 
 //*Ajout des urugences*//

  async addItem(item:Item){
   
item.date= this.datePipeString;
    this.item.nom=this.user.displayName;
	if(!this.item.motif|| this.item.motif.trim()=="" || this.item.motif ==null){
    const toast = await this.toastCtrl.create({
      message: 'Entrer le motif svp',
      duration: 3000
    });
    toast.present();
}

else{

  this.urugences.addItem(item).then(ref =>{
    console.log(ref.key);
    
  })

  const toast = await this.toastCtrl.create({
    message: 'Alerte envoyer',
    duration: 3000
  });
  toast.present();
  }
  
  }
 //*navigation vers l'acceuil*//
  
}	

