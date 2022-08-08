import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightyearPageRoutingModule } from './lightyear-routing.module';

import { LightyearPage } from './lightyear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightyearPageRoutingModule
  ],
  declarations: [LightyearPage]
})
export class LightyearPageModule {}
