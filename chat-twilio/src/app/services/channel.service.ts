import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/env';
import { ChannelsArray } from '../models/channel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', 'Basic '
    + btoa(`${environment.API_KEY}:${environment.API_SECRET}`));
  }

  getChannels(): Observable<ChannelsArray> {
    const service = localStorage.getItem('service_sid');
    return this.http.get<ChannelsArray>(`${environment.API_URI}/Services/${service}/Channels`, { headers: this.headers });
  }
}
