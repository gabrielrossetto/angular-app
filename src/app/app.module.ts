import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { UsersModule } from './components/users/users.module';
import { UserDetailsModule } from './components/user-details/user-details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, AppRoutingModule, HeaderModule, FooterModule, UsersModule, UserDetailsModule],
  bootstrap: [AppComponent],
})

export class AppModule { }
