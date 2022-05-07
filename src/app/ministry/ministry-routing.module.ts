import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistryPage } from './ministry.page';

const routes: Routes = [
  {
    path: '',
    component: MinistryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinistryPageRoutingModule {}
