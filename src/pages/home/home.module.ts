import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { Deeplinks } from '@ionic-native/deeplinks';

@NgModule({
  declarations: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage)
  ],
  providers:[Deeplinks]
})
export class HomePageModule { }
