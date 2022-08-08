import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightyearPage } from './lightyear.page';

const routes: Routes = [
  {
    path: '',
    component: LightyearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightyearPageRoutingModule {}
