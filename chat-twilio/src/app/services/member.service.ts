import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/env';
import { MembersArray, Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

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

  list(service: string, channel: string): Observable<MembersArray> {
    return this.http.get<MembersArray>(`${environment.API_URI}/Services/${service}/Channels/${channel}/Members`,
     { headers: this.headersGet() });
  }

  create(service: string, channel: string, identity: string): Observable<Member> {
    return this.http.post<Member>(`${environment.API_URI}/Services/${service}/Channels/${channel}/Members`, `Identity=${identity}`,
      { headers: this.headersPost() });
  }

  delete(service: string, channel: string) {
    return this.http.delete(`${environment.API_URI}/Services/${service}/Channels/${channel}`, { headers: this.headersGet() });
  }

}
