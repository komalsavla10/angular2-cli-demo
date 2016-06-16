import {
  ViewContainerRef,
    DynamicComponentLoader,
    Attribute,
    Directive
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router-deprecated';

import { UserService } from './user.service';

@Directive({
  selector: 'router-outlet-new'
})
export class LoggedInRouterOutletDirective extends RouterOutlet {
  publicRoutes = [
    '', 'login', 'signup', 'about'
  ];

  private userService;
  private parentRouter;

  constructor(
    containerRef: ViewContainerRef,
    componentLoader: DynamicComponentLoader,
    parentRouter: Router,
    @Attribute('name') name,
  userService: UserService
) {
  super(containerRef, componentLoader, parentRouter, name);

  this.parentRouter = parentRouter;
  this.userService = userService;
}

activate(instruction) {
  if (this._canActivate(instruction.urlPath)) {
    return super.activate(instruction);
  }

  this.parentRouter.navigate(['Login']);
}

_canActivate(url) {
  return this.publicRoutes.indexOf(url) !== -1 || this.userService.isLoggedIn();
}
}
