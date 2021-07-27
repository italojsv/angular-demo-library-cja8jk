import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
    //for demonstration purposes, always deny access
    alert("Unauthorized! Only administrators are allowed.");
    return false;
  }

}