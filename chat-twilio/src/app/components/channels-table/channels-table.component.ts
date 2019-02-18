import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../services/channel.service';
import { Channel } from 'src/app/models/channel';

@Component({
  selector: 'app-channels-table',
  templateUrl: './channels-table.component.html',
  styleUrls: ['./channels-table.component.css']
})
export class ChannelsTableComponent implements OnInit {

  private channels: Channel[];

  constructor(private service: ChannelService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.service.list(localStorage.getItem('service_sid')).subscribe(
      data => this.channels = data.channels,
      err => console.error(err)
    );
  }

  delete(sid: string) {
    this.service.delete(localStorage.getItem('service_sid'), sid).subscribe(
      res => {
        this.getList();
      },
      err => console.error(err)
    );
  }

}
