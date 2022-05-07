import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistryPageRoutingModule } from './ministry-routing.module';

import { MinistryPage } from './ministry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinistryPageRoutingModule
  ],
  declarations: [MinistryPage]
})
export class MinistryPageModule {}
