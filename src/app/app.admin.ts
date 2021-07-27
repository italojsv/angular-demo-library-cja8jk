import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './app.admin.html',
  styleUrls: ['./app.component.css']
})

export class Admin{
  constructor(private route:ActivatedRoute) {
  }

}