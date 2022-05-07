import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrayersPageRoutingModule } from './prayers-routing.module';

import { PrayersPage } from './prayers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrayersPageRoutingModule
  ],
  declarations: [PrayersPage]
})
export class PrayersPageModule {}
