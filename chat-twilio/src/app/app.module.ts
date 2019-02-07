import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChannelsListComponent } from './components/channels-list/channels-list.component';
import { ChannelsCrudComponent } from './components/channels-crud/channels-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ChatComponent,
    ChannelsListComponent,
    ChannelsCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
