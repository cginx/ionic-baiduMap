import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GapdeMapPage } from './gapde-map';
import { GaodeMapComponentModule } from '../../components/gaode-map/gaode-map.module';

@NgModule({
  declarations: [
    GapdeMapPage,
  ],
  imports: [
    GaodeMapComponentModule,
    IonicPageModule.forChild(GapdeMapPage),
  ],
})
export class GapdeMapPageModule {}
