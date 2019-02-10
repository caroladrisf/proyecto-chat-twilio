import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelsCrudComponent } from './components/channels-crud/channels-crud.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent
  },
  {
    path: 'session',
    component: LoginComponent
  },
  {
    path: 'channels',
    component: ChannelsCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
