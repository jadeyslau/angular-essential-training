// bootstrapping the module for the browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //this is importing a fn
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule); //call the bootstrap module using the period, this fn expects a root fn which we made earlier
