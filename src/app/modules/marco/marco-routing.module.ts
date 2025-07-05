import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcoComponent } from './marco.component';

const routes: Routes = [{ path: '', component: MarcoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcoRoutingModule { }
