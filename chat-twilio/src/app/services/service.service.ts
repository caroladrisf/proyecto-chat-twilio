import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/env';
import { Observable } from 'rxjs';
import { ServicesArray, Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

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

  retrieve(service: string): Observable<Service> {
    return this.http.get<Service>(`${environment.API_URI}/Services/${service}`,
      { headers: this.headersGet() });
  }

  create(friendlyName: string): Observable<Service> {
    return this.http.post<Service>(`${environment.API_URI}/Services`, `FriendlyName=${friendlyName}`,
      { headers: this.headersPost() });
  }

  list(): Observable<ServicesArray> {
    return this.http.get<ServicesArray>(`${environment.API_URI}/Services`, { headers: this.headersGet() });
  }

}
