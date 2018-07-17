import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goAbout() {
    this.navCtrl.push('AboutPage');
  }

  testMap() {
    this.navCtrl.push('TestMapPage');
  }

}