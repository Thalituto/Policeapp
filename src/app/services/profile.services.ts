import {Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Profile } from 'src/environments/profile';
import { Item } from 'src/models/item/item.model';

@Injectable()

export class ProfileService{
    private profileRef= this.db.list <Profile>('user');
constructor( private db:AngularFireDatabase){

}
getUrugence(){
    return this.profileRef;
}
addItem(profile:Profile){
    return this.profileRef.push(profile);
}
}