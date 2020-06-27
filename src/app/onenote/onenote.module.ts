import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnenotePageRoutingModule } from './onenote-routing.module';

import { OnenotePage } from './onenote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnenotePageRoutingModule
  ],
  declarations: [OnenotePage]
})
export class OnenotePageModule {}
