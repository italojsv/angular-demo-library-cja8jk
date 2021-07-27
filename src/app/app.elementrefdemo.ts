import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'elementref',
  templateUrl: './app.elementrefdemo.html',
  styleUrls: ['./app.component.css']
})

export class ElementRefDemo{
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(){
    //retrieve query params from URL
    this.route.queryParams.subscribe(params => {
      //if param 'name', Angular sanitization enforced
      this.name = params['name']
    });
  };
}