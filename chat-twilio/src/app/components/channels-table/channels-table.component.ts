import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../services/channel.service';
import { Channel } from 'src/app/models/channel';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-channels-table',
  templateUrl: './channels-table.component.html',
  styleUrls: ['./channels-table.component.css']
})
export class ChannelsTableComponent implements OnInit {

  private channels: Channel[];

  constructor(private channelS: ChannelService, private service: ServiceService) { }

  ngOnInit() {
    this.getService();
  }

  getService() {
    this.service.list().subscribe(
      res => {
        if (res.services.length > 0) {
          localStorage.setItem('service_sid', res.services[0].sid);
        } else {
          this.service.create('chat-service').subscribe(
            service => localStorage.setItem('service_sid', service.sid),
            err => console.error(err)
          );
        }
        this.getList();
      },
      err => console.error(err)
    );
  }

  getList() {
    this.channelS.list(localStorage.getItem('service_sid')).subscribe(
      data => this.channels = data.channels,
      err => console.error(err)
    );
  }

  delete(sid: string) {
    this.channelS.delete(localStorage.getItem('service_sid'), sid).subscribe(
      res => {
        this.getList();
      },
      err => console.error(err)
    );
  }

}
