import { Injectable } from '@angular/core';

import { environment } from 'src/environments/env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(data): boolean {
    if (data.username === environment.ADMIN_USERNAME && data.password === environment.ADMIN_PASSWORD) {
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('auth');
  }
}
