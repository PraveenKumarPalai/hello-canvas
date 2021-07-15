import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorRouletteRoutingModule } from './color-roulette-routing.module';
import { ColorRouletteComponent } from './color-roulette.component';


@NgModule({
  declarations: [
    ColorRouletteComponent
  ],
  imports: [
    CommonModule,
    ColorRouletteRoutingModule
  ]
})
export class ColorRouletteModule { }
