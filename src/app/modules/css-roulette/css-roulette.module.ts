import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRouletteRoutingModule } from './css-roulette-routing.module';
import { CssRouletteComponent } from './css-roulette.component';


@NgModule({
  declarations: [
    CssRouletteComponent
  ],
  imports: [
    CommonModule,
    CssRouletteRoutingModule
  ]
})
export class CssRouletteModule { }
