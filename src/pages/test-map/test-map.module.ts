import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestMapPage } from './test-map';
import { ShowMapComponentModule } from '../../components/show-map/show-map.module';

@NgModule({
  declarations: [
    TestMapPage,
  ],
  imports: [
    ShowMapComponentModule,
    IonicPageModule.forChild(TestMapPage),
  ],
})
export class TestMapPageModule {}
