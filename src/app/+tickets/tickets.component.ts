import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';

import {CustomValidator} from './customvalidator';

@Component({
  moduleId: module.id,
  selector: 'app-tickets',
  templateUrl: 'tickets.component.html',
  styleUrls: ['tickets.component.css']
})
export class TicketsComponent implements OnInit {

  form: ControlGroup;

  constructor(private builder:FormBuilder) {

    this.form = builder.group({
      username: ['', Validators.compose([Validators.required, CustomValidator.validUserNameCheck]), CustomValidator.usernameTaken],
      password: []
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.errors);
  }

}
