import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WixossNavbarComponent } from './components/wixoss-navbar/wixoss-navbar.component';
import { HomePageComponent } from './components/page-components/home-page/home-page.component';
import { AppMaterialModule } from './components/shared/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/routes/app-routing.module';
import { WixossDecksComponent } from './components/wixoss-decks/wixoss-decks.component';
import { WixossDeckComponent } from './components/wixoss-decks/wixoss-deck/wixoss-deck.component';
import { LoginPageComponent } from './components/page-components/login-page/login-page.component';
import { NoPageFoundComponent } from './components/page-components/no-page-found/no-page-found.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorCatchingInterceptorInterceptor } from './interceptors/error-catching-interceptor.interceptor';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WixossNavbarComponent,
    HomePageComponent,
    WixossDecksComponent,
    WixossDeckComponent,
    LoginPageComponent,
    NoPageFoundComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorCatchingInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
