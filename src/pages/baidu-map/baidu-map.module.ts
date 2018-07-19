import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaiduMapPage } from './baidu-map';
import { BaiduMapComponentModule } from '../../components/baidu-map/baidu-map.module';

@NgModule({
  declarations: [
    BaiduMapPage,
  ],
  imports: [
    BaiduMapComponentModule,
    IonicPageModule.forChild(BaiduMapPage),
  ],
})
export class BaiduMapPageModule {}
