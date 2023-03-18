import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CardsComponent } from './cards/cards.component';

@NgModule({
    imports: [
   
      FormsModule,
      IonicModule,
      CommonModule
    ],
    declarations: [CardsComponent],
    exports:[CardsComponent]
  })
  export class ComponentModule {}