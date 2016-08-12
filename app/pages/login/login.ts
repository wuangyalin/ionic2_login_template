import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController,Alert } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account';

@Component({
  templateUrl: 'build/pages/login/login.html',
  animations: [
    //For the logo
    trigger('logoState', [
      state('logoIn', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,1500px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),
    trigger('buttonState', [
      state('buttonIn', style({
         opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 2000ms ease-in')
      ])
    ]),
  ]
})
export class LoginPage {
  private logoState: any = "in";


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
