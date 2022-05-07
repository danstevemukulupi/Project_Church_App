import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YesumakambuPage } from './yesumakambu.page';

const routes: Routes = [
  {
    path: '',
    component: YesumakambuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YesumakambuPageRoutingModule {}
