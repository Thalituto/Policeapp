import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path:"",
    component:IndexPage,
    children:
      [
        {
          path: 'home',
          children:
            [
              {
                path: '',
                loadChildren: '../home/home.module#HomePageModule'
              }
            ]
        },
        {
          path: 'addcustomer',
          children:
            [
              {
                path: '',
                loadChildren: '../addcustomer/addcustomer.module#AddcustomerPageModule'
              }
            ]
        },
        {
          path: 'customer',
          children:
            [
              {
                path: '',
                loadChildren: '../customer/customer.module#CustomerPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/index/home',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/index/home',
    pathMatch: 'full'
  }
];
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}




