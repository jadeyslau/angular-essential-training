import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // since we are building browser based app we can use the browser app module which is available via Angular
import { AppComponent } from './app.component'; // a starting component

@NgModule({
  imports:  // bring in other Angular modules that your module might need
    BrowserModule
  ],
  declarations:[ // make components, directives, and pipes available to your module
    AppComponent
  ],
  bootstrap:[ // used for a root module and will let Angular know which component(s) will be the starting point for bootstrapping process
    AppComponent
  ]
})
export class AppModule {
