import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Storage, LocalStorage} from 'ionic-angular';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  local = new Storage(LocalStorage);

  constructor() {
  }

  checkLogin(){
    return this.local.get('login');
  }
  saveLogin(value: string){
    this.local.set('login',value);
  }
}

