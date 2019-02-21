import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { MessageService } from 'src/app/services/message.service';
import { Member } from 'src/app/models/member';
import { Message } from 'src/app/models/message';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  members: Member[];
  messages: Message[];
  channel: string;
  msg: string;
  identity: string;

  constructor(private channelS: ChannelService, private memberS: MemberService, private messageS: MessageService) { }

  ngOnInit() {
    this.getChannel();
    this.getMember();
    this.listMessages();
  }

  getChannel() {
    this.channelS.retrieve(localStorage.getItem('service_sid'), localStorage.getItem('channel_sid'))
    .subscribe(
      res => this.channel = res.friendly_name,
      err => console.error(err)
    );
  }

  getMember() {
    this.memberS.retrieve(localStorage.getItem('service_sid'), localStorage.getItem('channel_sid'),
    localStorage.getItem('member_sid')).subscribe(
      res => this.identity = res.identity,
      err => console.error(err)
    );
  }

  listMembers() {
    this.memberS.list(localStorage.getItem('service_sid'), localStorage.getItem('channel_sid'))
    .subscribe(
      res => {
        this.members = res.members;
      }
    );
  }

  listMessages() {
    this.messageS.list(localStorage.getItem('service_sid'), localStorage.getItem('channel_sid'))
    .subscribe(
      res => {
        this.messages = res.messages;
      },
      err => console.error(err)
    );
  }

  sendMessage() {
    console.log(this.msg);
    this.messageS.send(localStorage.getItem('service_sid'), localStorage.getItem('channel_sid'),
    this.msg, this.identity).subscribe(
      res => {
        this.msg = '';
        this.listMessages();
      },
      err => console.error(err)
    );
  }

}
