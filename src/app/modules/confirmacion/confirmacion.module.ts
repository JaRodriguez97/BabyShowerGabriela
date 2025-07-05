import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmacionRoutingModule } from './confirmacion-routing.module';
import { ConfirmacionComponent } from './confirmacion.component';


@NgModule({
  declarations: [
    ConfirmacionComponent
  ],
  imports: [
    CommonModule,
    ConfirmacionRoutingModule
  ]
})
export class ConfirmacionModule { }
