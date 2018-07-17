import { Component, ViewChild, ElementRef } from '@angular/core';

/**
 * Generated class for the ShowMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

declare let BMap: any;

@Component({
  selector: 'show-map',
  templateUrl: 'show-map.html'
})
export class ShowMapComponent {
  @ViewChild('map') map: ElementRef;

  constructor() {
    console.log('Hello ShowMapComponent Component');
  }

  ngOnInit() {
    this.init();
  }

  init() {
    let map = new BMap.Map(this.map.nativeElement);
    let point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);
    let BMAP_STATUS_SUCCESS = 0;
    let geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        let mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
      }
      else {
        alert('failed' + this.getStatus());
      }
    }, { enableHighAccuracy: true })
  }


}
