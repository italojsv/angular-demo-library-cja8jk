import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  templateUrl: './app.webstoragedemo.html',
  styleUrls: ['./app.component.css']
})

export class WebStorageDemo{
  constructor(private route:ActivatedRoute) {
  }

  @LocalStorage() UserData: Object = {
    FirstName: "Bob",
    LastName: "Smith",
    SSN: "252-39-9847",
    Phone: "376-382-4638",
    DOB: "1969-05-19",
    Note: "This data persists indefinitely unless explicitly deleted"

  }

  @SessionStorage() CachedData: Object = {
    Language: "EN",
    Note: "This data will be deleted when the browser session closes"
  }

}