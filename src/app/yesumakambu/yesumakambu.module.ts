import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YesumakambuPageRoutingModule } from './yesumakambu-routing.module';

import { YesumakambuPage } from './yesumakambu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YesumakambuPageRoutingModule
  ],
  declarations: [YesumakambuPage]
})
export class YesumakambuPageModule {}
