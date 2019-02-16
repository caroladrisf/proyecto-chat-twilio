import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ServiceService) {
    service.getService().subscribe((data) => {
      if (data.services[0].sid) {
        localStorage.setItem('service_sid', data.services[0].sid);
      } else {
        localStorage.clear();
      }
    });
  }

  ngOnInit() {
  }

  auth() {
    return localStorage.getItem('auth');
  }

}
