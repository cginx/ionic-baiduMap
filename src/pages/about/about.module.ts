import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { ShowMapComponentModule } from '../../components/show-map/show-map.module';

@NgModule({
  declarations: [AboutPage],
  imports: [
    ShowMapComponentModule,
    IonicPageModule.forChild(AboutPage)
  ],
})
export class AboutPageModule { }
