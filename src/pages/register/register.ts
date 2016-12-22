import { Component } from '@angular/core';
import { NavController,AlertController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { DataService } from '../../providers/data-service';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  form: FormGroup;
 
  constructor(private data: DataService,private alertCtrl: AlertController,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.form = formBuilder.group({
      email: ['',Validators.required],
      userName: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ionViewDidLoad() {
  }

  logForm(form){
    console.log(form.value.email);
    this.data.saveLogin(form.value.email);
    this.doAlert();
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Congulations',
      subTitle: 'You have successfully created your account!!',
      buttons: [{
          text: 'OK',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        }]
    });
    alert.present(alert);
  }

}
