import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeriesssPageRoutingModule } from './seriesss-routing.module';

import { SeriesssPage } from './seriesss.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SeriesssPageRoutingModule
  ],
  declarations: [SeriesssPage]
})
export class SeriesssPageModule {}
