import { Component } from '@angular/core';

@Component({
  selector: 'mw-app', // custom dom elements should contain at least one dash (W3C Spec)
  // template: '<h1>My App</h1><p>Keeping track of the media I want to watch</p>' // inline template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
