import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/env';
import { Observable } from 'rxjs';
import { Message, MessagesArray } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

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

  list(service: string, channel: string): Observable<MessagesArray> {
    return this.http.get<MessagesArray>(`${environment.API_URI}/Services/${service}/Channels/${channel}/Messages`,
     { headers: this.headersGet() });
  }

  send(service: string, channel: string, body: string, identity: string): Observable<Message> {
    return this.http.post<Message>(`${environment.API_URI}/Services/${service}/Channels/${channel}/Messages`,
    `Body=${body}&From=${identity}`,
      { headers: this.headersPost() });
  }
}
