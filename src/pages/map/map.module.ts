import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';
import { ShowMapComponentModule } from '../../components/show-map/show-map.module';

@NgModule({
  declarations: [MapPage],
  imports: [
    ShowMapComponentModule,
    IonicPageModule.forChild(MapPage)
  ],
})
export class MapPageModule { }
