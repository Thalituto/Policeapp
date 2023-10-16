import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfouserPage } from './infouser.page';

const routes: Routes = [
  {
    path: '',
    component: InfouserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfouserPageRoutingModule {}
