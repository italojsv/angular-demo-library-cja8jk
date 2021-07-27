import { Directive, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[name]'
})

export class UpdateNameDirective{
  constructor(private route:ActivatedRoute, private el:ElementRef) {
    route.queryParams.subscribe(params => {
      //if param 'name', Angular sanitization enforced
      this.name = params['name']
    });
    el.nativeElement.innerHTML = name;
  }

  ngOnInit(){
    //retrieve query params from URL
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      //place untrusted name value directly in element's innerHTML - Danger!
      this.el.nativeElement.innerHTML = this.name || "anonymous user";
    });
  };
}