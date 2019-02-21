import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('channel_sid');
    localStorage.removeItem('member_sid');
  }

  login() {
    const logged = this.authService.login(this.admin);
    if (logged) {
      this.router.navigate(['/channels']);
    } else {
      alert('Login incorrecto');
    }
  }

}
