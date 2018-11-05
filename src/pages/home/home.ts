import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController, DeepLinkConfig } from 'ionic-angular';
import { Deeplinks } from '@ionic-native/deeplinks';
// import { QrCode } from 'qrcode-reader';
import * as QrCode from 'qrcode-reader/dist/index.js';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Deeplinks
  constructor(public navCtrl: NavController, private deeplinks: Deeplinks,
    private alertCtrl: AlertController,
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


  go() {

    let alert = this.alertCtrl.create({
      title: '测试',
      message: '测试',
      buttons: ['Dismiss']
    });
    alert.present();
    try {

      this.deeplinks.route({
        'path': 'HTTPS://QR.ALIPAY.COM/FKX09715A5X4ZOPKMNFXFF?t=1539313975690'
      }).subscribe(match => {
        // match.$route - the route we matched, which is the matched entry from the arguments to route()
        // match.$args - the args passed in the link
        // match.$link - the full link data
        console.log('Successfully matched route', match);
        let alert = this.alertCtrl.create({
          title: '成功',
          message: JSON.stringify(match),
          buttons: ['Dismiss']
        });
        alert.present();
      }, nomatch => {
        // nomatch.$link - the full link data
        console.log('Got a deeplink that didn\'t match', nomatch);
        let alert = this.alertCtrl.create({
          title: '失败',
          message: JSON.stringify(nomatch),
          buttons: ['Dismiss']
        });
        alert.present();
      });
    } catch (error) {
      let alert = this.alertCtrl.create({
        title: '失败',
        message: JSON.stringify(error),
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }
}
