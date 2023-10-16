import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { InfouserPageRoutingModule } from './infouser-routing.module';

import { InfouserPage } from './infouser.page';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfouserPageRoutingModule,
    
  ],
  declarations: [InfouserPage]
})
export class InfouserPageModule {}
