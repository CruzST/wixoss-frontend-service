import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WixossNavbarComponent } from './components/wixoss-navbar/wixoss-navbar.component';
import { HomePageComponent } from './components/page-components/home-page/home-page.component';
import { AppMaterialModule } from './components/shared/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/routes/app-routing.module';
import { WixossDecksComponent } from './components/wixoss-decks/wixoss-decks.component';

@NgModule({
  declarations: [
    AppComponent,
    WixossNavbarComponent,
    HomePageComponent,
    WixossDecksComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
