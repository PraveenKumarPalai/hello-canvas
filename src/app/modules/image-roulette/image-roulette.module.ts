import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageRouletteRoutingModule } from './image-roulette-routing.module';
import { ImageRouletteComponent } from './image-roulette.component';


@NgModule({
  declarations: [
    ImageRouletteComponent
  ],
  imports: [
    CommonModule,
    ImageRouletteRoutingModule
  ]
})
export class ImageRouletteModule { }
