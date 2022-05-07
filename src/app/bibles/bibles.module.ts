import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiblesPageRoutingModule } from './bibles-routing.module';

import { BiblesPage } from './bibles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiblesPageRoutingModule
  ],
  declarations: [BiblesPage]
})
export class BiblesPageModule {}
