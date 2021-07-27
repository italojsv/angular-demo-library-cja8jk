import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: '<mat-card-content><mat-card-title>Angular Demo Library</mat-card-title><p>Welcome to the Angular Demo Library! Use the nav-bar above to select a demo.</p>',
  styleUrls: ['./app.component.css']
})

export class Home{
  constructor(private route:ActivatedRoute) {
  }

}