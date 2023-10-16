import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, NavParams } from '@ionic/angular';
import{Profile} from '../../environments/profile';
import { AngularFireDatabase } from '@angular/fire/database';
import { IndexPage } from '../index/index.page';
@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.page.html',
  styleUrls: ['./infouser.page.scss'],
})
export class InfouserPage implements OnInit {

  profile={} as Profile;


  constructor(private afAuth : AngularFireAuth, private afDatabase:AngularFireDatabase, public navCtrl:NavController
) { }

  ngOnInit() {
  }


  createProfile(){
  
this.afAuth.authState.take(1).subscribe(auth=>{

  this.afDatabase.object(`profile/${auth.uid}`).set(this.profile).then(()=>this.navCtrl.navigateRoot('/profile'));
})

  }

ionViewDidload(){ console.log('InfouserPage'); }

}
