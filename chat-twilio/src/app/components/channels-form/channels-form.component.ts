import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/services/channel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channels-form',
  templateUrl: './channels-form.component.html',
  styleUrls: ['./channels-form.component.css']
})
export class ChannelsFormComponent implements OnInit {

  private friendlyName: string;
  constructor(private service: ChannelService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    if (this.friendlyName) {
      this.service.create(localStorage.getItem('service_sid'), this.friendlyName).subscribe(
        res => this.friendlyName = '',
        err => console.error(err)
      );
    } else {
      alert('Friendly name is required');
    }
  }

}
