import { Component, ElementRef, ViewChild } from '@angular/core';

/**
 * Generated class for the GaodeMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

declare let AMap: any;

@Component({
  selector: 'gaode-map',
  templateUrl: 'gaode-map.html'
})
export class GaodeMapComponent {

  @ViewChild('map') map: ElementRef;

  constructor() {
    console.log('Hello GaodeMapComponent Component');
  }

  ngOnInit() {
    this.init();
  }

  init() {
    let map = new AMap.Map(this.map.nativeElement, {
      resizeEnable: true,
      zoom: 11,
    });
  }
}
