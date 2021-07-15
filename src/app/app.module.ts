import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageRouletteComponent } from './modules/image-roulette/image-roulette.component';
import { ColorRouletteComponent } from './modules/color-roulette/color-roulette.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplatingModule } from './common/templating/templating.module';
import { CssRouletteComponent } from './modules/css-roulette/css-roulette.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    TemplatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
