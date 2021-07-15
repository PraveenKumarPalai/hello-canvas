import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageRouletteComponent } from './image-roulette.component';

const routes: Routes = [
  {
    path: '',
    component: ImageRouletteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageRouletteRoutingModule { }
