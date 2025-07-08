import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { FooterModule } from '@modules/footer/footer.module';
import { InicioComponent } from './inicio.component';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, InicioRoutingModule, FooterModule],
  schemas: [],
})
export class InicioModule {}
