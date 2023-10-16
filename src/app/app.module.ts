import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { IonicStorageModule } from '@ionic/storage';
import{HttpClientModule} from '@angular/common/http';

import { UrugencesService } from './services/urugences/urugences.service';

import { AuthenticateService } from './services/authentication.service';
import { Camera } from '@ionic-native/camera/ngx';
import { DatePipe } from '@angular/common';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
   
  ],
  
  providers: [
     [DatePipe],
    StatusBar,
    SplashScreen,Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UrugencesService,
    AuthenticateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
