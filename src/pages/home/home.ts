import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';
import * as QrCode from 'qrcode-reader/dist/index.js';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Deeplinks
  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
  ) {
    console.log('   ')
  }

  goBaiduMap() {
    this.navCtrl.push('BaiduMapPage');
  }

  goGaodeMap() {
    this.navCtrl.push('GapdeMapPage');
  }


  testMap() {
    this.navCtrl.push('TestMapPage');
  }

  qrCode() {
    var qr = new QrCode();

    qr.callback = function (error, result) {
      if (error) {
        console.log(error)
        return;
      }
      console.log(result)
    }
    qr.decode(this.getImg());
  }

  getImg() {

  };

}
