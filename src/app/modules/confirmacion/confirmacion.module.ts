import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmacionRoutingModule } from './confirmacion-routing.module';
import { ConfirmacionComponent } from './confirmacion.component';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [ConfirmacionComponent],
  imports: [CommonModule, ConfirmacionRoutingModule, FooterModule],
})
export class ConfirmacionModule {}
