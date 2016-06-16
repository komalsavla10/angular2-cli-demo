import { Component,OnChanges } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router-deprecated';
import { LoggedInRouterOutletDirective } from './loggedin.routeroutlet';
import {CookieService} from 'angular2-cookie/core';
import { UserService } from './user.service';
import { TicketsComponent } from './+tickets';
import { HeroComponent } from './+hero';
import { DashboardComponent } from './+dashboard';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.css'],
  directives: [ROUTER_DIRECTIVES, LoggedInRouterOutletDirective],
  providers: [ROUTER_PROVIDERS, CookieService, UserService]
})
@RouteConfig([
  {path: '/login', name:'Login',component: TicketsComponent},
  {path: '/hero', name:'Hero',component: HeroComponent},
  {path: '/dashboard', name:'Dashboard',component: DashboardComponent}
])


export class DemoAppComponent {
  title = 'demo works!';
  loggedIn:boolean = false;
  constructor(private _cookieService:CookieService, private userService: UserService, private router:Router) {
    this.loggedIn = this.userService.isLoggedIn();
  }

  Logout() {
    this._cookieService.remove("username");
    window.location.href="/login";
  }
}
