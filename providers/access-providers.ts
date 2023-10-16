import {Injectable} from '@angular/core';
import{HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { JsonPipe } from '@angular/common';

@Injectable()

export class AccessProviders{
    server: string='http://localhost/policedata/'

constructor(
    public http: HttpClient){}


postData(body,file){
    let headers= new HttpHeaders({
        'Content-type':'application/Json;charset=UTF-8'

    });
    let options={
        headers: headers
    }
return this.http.post(this.server + file,JSON.stringify(body),options).timeout(59000).map(res=>res);
}

}
