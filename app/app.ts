import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {LoginPage} from './pages/login/login';
import {DataService} from './providers/data-service/data-service';



@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [DataService]
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, data: DataService) {

    data.checkLogin().then(result =>{
      if(result){
        this.rootPage = HomePage;
      }else{
        console.log(result);
        this.rootPage = LoginPage;
      }
    })


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
