import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssRouletteComponent } from './css-roulette.component';

const routes: Routes = [
  {
    path: '',
    component: CssRouletteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRouletteRoutingModule { }
