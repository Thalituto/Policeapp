import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  
  { path: 'index',loadChildren: './index/index.module#IndexPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },

  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'addcustomer', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'addcustomer/:id/:name/:desc', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'showcustomer/:id/:name/:desc', loadChildren: './showcustomer/showcustomer.module#ShowcustomerPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  {
    path: 'infouser',
    loadChildren: () => import('./infouser/infouser.module').then( m => m.InfouserPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
