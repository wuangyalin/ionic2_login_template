import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {}


  createAccount(){
    this.navCtrl.push(RegisterPage,{});
  }
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

 doAlert(value: string) {
    let alert = this.alertCtrl.create({
      title: 'Hey',
      message: 'write your own method to login with '+value,
      buttons: ['Ok']
    });
    alert.present();
  }

}
