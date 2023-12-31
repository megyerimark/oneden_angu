import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Home/home/home.component';
import { NavbarComponent } from './Nav/navbar/navbar.component';
import { LoginComponent } from './Admin/login/login.component';
import { ResdatasComponent } from './Admin/resdatas/resdatas.component';
import { RegisterComponent } from './Admin/register/register.component';
import { ResComponent } from './res/res.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { AdminbarComponent } from './Admin/adminbar/adminbar.component';
import { ProfilComponent } from './Admin/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ResdatasComponent,
    RegisterComponent,
    ResComponent,
    InfoComponent,
    FooterComponent,
    AdminbarComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
