import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { ChannelService } from './services/channel.service';
import { ServiceService } from './services/service.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChannelsListComponent } from './components/channels-list/channels-list.component';
import { ChannelsCrudComponent } from './components/channels-crud/channels-crud.component';
import { LoginComponent } from './components/login/login.component';
import { ChannelsTableComponent } from './components/channels-table/channels-table.component';
import { ChannelsFormComponent } from './components/channels-form/channels-form.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ChatComponent,
    ChannelsListComponent,
    ChannelsCrudComponent,
    LoginComponent,
    ChannelsTableComponent,
    ChannelsFormComponent,
    WelcomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ChannelService,
    ServiceService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
