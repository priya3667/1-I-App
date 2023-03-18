import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesssPage } from './seriesss.page';

const routes: Routes = [
  {
    path: '',
    component: SeriesssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesssPageRoutingModule {}
