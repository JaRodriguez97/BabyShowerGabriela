import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcoRoutingModule } from './marco-routing.module';
import { MarcoComponent } from './marco.component';
import { FooterModule } from '@modules/footer/footer.module';

@NgModule({
  declarations: [MarcoComponent],
  imports: [CommonModule, MarcoRoutingModule, FooterModule],
})
export class MarcoModule {}
