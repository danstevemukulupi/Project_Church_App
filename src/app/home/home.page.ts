import { Component } from '@angular/core';
import{NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl:NavController ,private nav:NavController, private nav1:NavController,
     private nav2:NavController, private nav3:NavController, private nav4:NavController) {}

  openChannelPage(){
  this.navCtrl.navigateForward('/yesumakambu');
  }

  openDailyPage(){
    this.nav.navigateForward('/daily');
  }
  openYouthPage(){
  this.nav1.navigateForward('/ministry');
  }
  openBiblePage(){
    this.nav2.navigateForward('/bibles');
  }
  openPrayerPage(){
    this.nav3.navigateForward('/meditation');
  }
  openHealPage(){
    this.nav4.navigateForward('/healing');
  }
}
