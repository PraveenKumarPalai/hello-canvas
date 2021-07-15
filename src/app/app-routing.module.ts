import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'image-roulette',
    loadChildren: () => import('./modules/image-roulette/image-roulette.module').then(m => m.ImageRouletteModule)
  },
  {
    path: 'color-roulette',
    loadChildren: () => import('./modules/color-roulette/color-roulette.module').then(m => m.ColorRouletteModule)
  }, 
  {
    path: 'css-roulette',
    loadChildren: () => import('./modules/css-roulette/css-roulette.module').then(m => m.CssRouletteModule)
  }, 
  {
    path: "**",
    redirectTo: 'image-roulette'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
