import { Component, OnInit } from '@angular/core';

import { ChannelService } from '../../services/channel.service';
import { Channel } from 'src/app/models/channel';
import { MemberService } from 'src/app/services/member.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.css']
})
export class ChannelsListComponent implements OnInit {

  private channels: Channel[];
  private channelSid: string;
  private identity: string;

  constructor(private channelS: ChannelService, private memberS: MemberService, private service: ServiceService) {  }

  ngOnInit() {
    this.retrieveService();
  }

  retrieveService() {
    this.service.list().subscribe(
      res => {
        if (res.services.length > 0) {
          localStorage.setItem('service_sid', res.services[0].sid);
          this.listChannels();
        }
      },
      err => console.error(err)
    );
  }

  listChannels() {
    this.channelS.list(localStorage.getItem('service_sid')).subscribe
    (
      data => this.channels = data.channels,
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
          this.listChannels();
        },
        err => console.error(err)
      );
    }
  }

}
