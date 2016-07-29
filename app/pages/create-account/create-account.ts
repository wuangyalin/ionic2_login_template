import { Component } from '@angular/core';
import { NavController,Alert } from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import {DataService} from '../../providers/data-service/data-service';

import {HomePage} from '../home/home';

@Component({
  templateUrl: 'build/pages/create-account/create-account.html',
  directives: [FORM_DIRECTIVES],
  providers: [DataService]
})
export class CreateAccountPage {
  authForm: ControlGroup;
  username: AbstractControl;
  password: AbstractControl;
  password_confirm: AbstractControl;
  constructor(private nav: NavController,private fb: FormBuilder,private data: DataService) {
    this.authForm = fb.group({  
            'username': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'password_confirm': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
    this.username = this.authForm.controls['username'];     
    this.password = this.authForm.controls['password'];
    this.password_confirm = this.authForm.controls['password_confirm'];
  }
  onSubmit(value: string): void { 
    if(this.authForm.valid) {
      //this code aims to save the created account infomation into localstorage  
      //so that we do not need to go to login page next time.

      //this.data.saveLogin(value);
      this.doAlert();
    }
  }
  doAlert() {
    let alert = Alert.create({
      title: 'Congulations',
      subTitle: 'You have successfully created your account!!',
      buttons: [{
          text: 'OK',
          handler: () => {
            this.nav.setRoot(HomePage);
          }
        }]
    });
    this.nav.present(alert);
  }

}
