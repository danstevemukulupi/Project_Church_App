import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiblesPage } from './bibles.page';

const routes: Routes = [
  {
    path: '',
    component: BiblesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiblesPageRoutingModule {}
