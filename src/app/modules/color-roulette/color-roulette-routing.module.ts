import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorRouletteComponent } from './color-roulette.component';

const routes: Routes = [
  {
    path: '',
    component: ColorRouletteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorRouletteRoutingModule { }
