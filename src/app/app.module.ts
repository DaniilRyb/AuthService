import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {ProfileAuthGuard} from './exit-auth.guard';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {HomeComponent} from './components/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    NotFoundPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProfileAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
