import {Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Item } from 'src/models/item/item.model';

@Injectable()

export class UrugencesService{
    private urugenceRef= this.db.list <Item>('urugence-list');
constructor( private db:AngularFireDatabase){

}
getUrugence(){
    return this.urugenceRef;
}
addItem(item:Item){
    return this.urugenceRef.push(item);
}
}