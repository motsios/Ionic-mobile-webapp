import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnenotePage } from './onenote.page';

const routes: Routes = [
  {
    path: '',
    component: OnenotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnenotePageRoutingModule {}
