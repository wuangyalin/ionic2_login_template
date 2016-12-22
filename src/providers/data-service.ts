import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  //check whether user has been logged in 
  checkLogin(){
    return this.storage.get('login');
  }
  //when user logged in, save the value in local device
  saveLogin(value: any){
    this.storage.set('login',value);
  }

}
