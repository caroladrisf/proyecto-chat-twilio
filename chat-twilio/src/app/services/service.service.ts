import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/env';
import { Observable } from 'rxjs';
import { ServicesArray } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', 'Basic '
    + btoa(`${environment.API_KEY}:${environment.API_SECRET}`));
  }

  getService(): Observable<ServicesArray> {
    return this.http.get<ServicesArray>(`${environment.API_URI}/Services`, { headers: this.headers });
  }

}
