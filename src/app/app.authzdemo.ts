import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './app.authzdemo.html',
  styleUrls: ['./app.component.css']
})

export class AuthZDemo{
  constructor(private route:ActivatedRoute) {
  }

}