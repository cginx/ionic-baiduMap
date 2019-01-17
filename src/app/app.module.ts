import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, DeepLinkConfig } from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { HomePageModule } from '../pages/home/home.module';
import { Calendar } from '@ionic-native/calendar';
import { Deeplinks } from '@ionic-native/deeplinks';


const deepLinkConfig: DeepLinkConfig = {
  links: [
    { component: 'bdapp://map/newsassistant?src=andr.baidu.openAPIdemo', name: "contact", segment: "contact" },
    { component: 'bdapp://map/newsassistant?src=andr.baidu.openAPIdemo', name: "hello", segment: "hello" }
  ]
};
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    IonicModule.forRoot(MyApp, undefined, deepLinkConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    Calendar,
    StatusBar,
    Deeplinks,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
