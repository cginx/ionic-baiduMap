import { Component, ViewChild, ElementRef } from '@angular/core';

/**
 * Generated class for the BaiduMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
declare let BMap: any;
@Component({
  selector: 'baidu-map',
  templateUrl: 'baidu-map.html'
})
export class BaiduMapComponent {

  @ViewChild('map') map: ElementRef;

  constructor() {
    console.log('Hello BaiduMapComponent Component');
  }

  ngOnInit() {
    this.init();
  }

  init() {
    let map = new BMap.Map(this.map.nativeElement);
    let BMAP_STATUS_SUCCESS = 0;
    let geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        console.log(`百度地图定位成功    lng：${r.point.lng},lat：${r.point.lat}`)
        map.centerAndZoom(r.point, 12);
        let mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
      }
      else {
        alert('failed' + this.getStatus());
      }
    }, { enableHighAccuracy: true })
  }
}
