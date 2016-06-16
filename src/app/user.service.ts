import {Injectable} from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private cookieService:CookieService) {
    this.loggedIn = !!cookieService.get("username");
    //this.loggedIn = false;
  }

  login(email, password) {
    this.loggedIn = true;
    return true;
  }

  logout() {
    this.cookieService.remove("username");
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
