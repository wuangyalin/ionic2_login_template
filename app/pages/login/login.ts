import { Component } from '@angular/core';
import { NavController,Alert } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(private nav: NavController) {}

  loginWithGoogle(){
    //todo
    this.doAlert('google+')
  }
  loginWithFaceBook(){
    //todo
    this.doAlert('FaceBook');
  }
  loginWithTwitter(){
    //todo
    this.doAlert('Twitter');
  }
  loginWithEmail(){
    //todo
    this.doAlert('Email');
  }
  createAccount(){
    this.nav.push(CreateAccountPage,{});
  }

  doAlert(value: string) {
    let alert = Alert.create({
      title: 'Hey',
      message: 'write your own method to login with '+value,
      buttons: ['Ok']
    });
    this.nav.present(alert);
  }
}
