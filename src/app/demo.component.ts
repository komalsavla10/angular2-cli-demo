import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { TicketsComponent } from './+tickets';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/tickets', name:'Tickets',component: TicketsComponent}
])

export class DemoAppComponent {
  title = 'demo works!';
}
