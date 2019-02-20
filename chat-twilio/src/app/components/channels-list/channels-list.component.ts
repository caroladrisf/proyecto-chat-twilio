import { Component, OnInit } from '@angular/core';

import { ChannelService } from '../../services/channel.service';
import { Channel } from 'src/app/models/channel';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.css']
})
export class ChannelsListComponent implements OnInit {

  private channels: Channel[];
  private channelSid: string;
  private identity: string;

  constructor(private channelS: ChannelService, private memberS: MemberService) {  }

  ngOnInit() {
    this.channelS.list(localStorage.getItem('service_sid')).subscribe
    (
      data => {
        this.channels = data.channels;
        console.log(this.channels);
      },
      err => console.error(err)
    );
  }

  joinChannel() {
    console.log(this.channelSid);
    if (this.identity) {
      this.memberS.create(localStorage.getItem('service_sid'), this.channelSid, this.identity).subscribe(
        res => {
          localStorage.setItem('channel_sid', this.channelSid);
          localStorage.setItem('member_sid', res.sid);
        },
        err => console.error(err)
      );
    }
  }

}
