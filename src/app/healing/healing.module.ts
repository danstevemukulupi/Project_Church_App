import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealingPageRoutingModule } from './healing-routing.module';

import { HealingPage } from './healing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealingPageRoutingModule
  ],
  declarations: [HealingPage]
})
export class HealingPageModule {}
