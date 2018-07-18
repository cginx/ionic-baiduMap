import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowMapComponent } from '../../components/show-map/show-map';
/**
 * Generated class for the TestMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-map',
  templateUrl: 'test-map.html',
})
export class TestMapPage {

  @ViewChild(ShowMapComponent)private showMap: ShowMapComponent;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestMapPage');
  }

  doRefresh(){
    this.showMap.init();
  }


}
