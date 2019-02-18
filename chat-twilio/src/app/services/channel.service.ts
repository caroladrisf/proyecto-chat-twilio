import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/env';
import { ChannelsArray, Channel } from '../models/channel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

  private headersGet() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'Basic ' + btoa(`${environment.API_KEY}:${environment.API_SECRET}`));
    return headers;
  }

  private headersPost() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization', 'Basic ' + btoa(`${environment.API_KEY}:${environment.API_SECRET}`));
    return headers;
  }

  list(service: string): Observable<ChannelsArray> {
    return this.http.get<ChannelsArray>(`${environment.API_URI}/Services/${service}/Channels`, { headers: this.headersGet() });
  }

 /*  retrieve(service: string, channel: string): Observable<Channel> {
    return this.http.get<Channel>(`${environment.API_URI}/Services/${service}/Channels/${channel}`, { headers: this.headersGet() });
  } */

  create(service: string, friendlyName: string): Observable<Channel> {
    return this.http.post<Channel>(`${environment.API_URI}/Services/${service}/Channels`, `FriendlyName=${friendlyName}`,
      { headers: this.headersPost() });
  }

  /* update(service: string, channel: string, friendlyName: string): Observable<Channel> {
    return this.http.post<Channel>(`${environment.API_URI}/Services/${service}/Channels/${channel}`, { FriendlyName: friendlyName },
      { headers: this.headersPost() });
  } */

  delete(service: string, channel: string) {
    return this.http.delete(`${environment.API_URI}/Services/${service}/Channels/${channel}`, { headers: this.headersGet() });
  }

}
