import { Component, SecurityContext, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sanitizer',
  templateUrl: './app.sanitizerdemo.html',
  styleUrls: ['./app.component.css']
})

export class SanitizerDemo{
  constructor(private sanitizer:DomSanitizer,
    private route:ActivatedRoute) {
  }

  ngOnInit(){
    //retrieve query params from URL
    this.route.queryParams.subscribe(params => {
      //if param 'name', Angular sanitization enforced
      this.name = params['name'] || 
      //if param 'trusted_name', Angular sanitization disabled - Danger!
      this.sanitizer.bypassSecurityTrustHtml((params['trusted_name'] || "anonymous user"));
    });
  };
}