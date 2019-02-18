import { Component, OnInit } from '@angular/core';

import { ChannelService } from '../../services/channel.service';
import { Channel } from 'src/app/models/channel';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.css']
})
export class ChannelsListComponent implements OnInit {

  private channels: Channel[];

  constructor(private service: ChannelService) {  }

  ngOnInit() {
    this.service.list(localStorage.getItem('service_sid')).subscribe
    (
      data => {
        this.channels = data.channels;
        console.log(this.channels);
      },
      err => console.error(err)
    );
  }

}
