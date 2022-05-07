import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealingPage } from './healing.page';

const routes: Routes = [
  {
    path: '',
    component: HealingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealingPageRoutingModule {}
