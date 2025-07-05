import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcoRoutingModule } from './marco-routing.module';
import { MarcoComponent } from './marco.component';


@NgModule({
  declarations: [
    MarcoComponent
  ],
  imports: [
    CommonModule,
    MarcoRoutingModule
  ]
})
export class MarcoModule { }
