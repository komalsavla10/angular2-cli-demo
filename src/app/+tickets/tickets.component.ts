import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { Router } from '@angular/router-deprecated';

import {CustomValidator} from './customvalidator';
import {CookieService} from 'angular2-cookie/core';
import { UserService } from './../user.service';

@Component({
  moduleId: module.id,
  selector: 'app-tickets',
  templateUrl: 'tickets.component.html',
  styleUrls: ['tickets.component.css'],
  providers: [CookieService, UserService]
})
export class TicketsComponent implements OnInit {

  loggedIn:boolean = false;
  form: ControlGroup;

  constructor(private builder:FormBuilder, private _cookieService:CookieService, private userService:UserService, private router: Router) {

    this.form = builder.group({
      username: ['', Validators.compose([Validators.required, CustomValidator.validUserNameCheck]), CustomValidator.usernameTaken],
      password: []
    })
  }

  ngOnInit() {
    this.loggedIn = this.userService.isLoggedIn();
    console.log(this.loggedIn);
  }

  onSubmit() {
    this._cookieService.put("username", "komal");
    var cookies = this._cookieService.get("username");
    this.loggedIn = this.userService.login("komal", "pass");
    //this.router.navigate(['Hero']);
    window.location.href="/hero";

  }

}
