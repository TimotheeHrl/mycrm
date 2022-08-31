import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: PageSignInComponent },
=======
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
>>>>>>> 115419498f4bc634c0c3b36fe07a8810910ac144
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
<<<<<<< HEAD
  }, // lazy loading
=======
  },
>>>>>>> 115419498f4bc634c0c3b36fe07a8810910ac144
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  {
<<<<<<< HEAD
    path: 'login',
    loadChildren: () =>
      import('./login/login-routing.module').then((m) => m.LoginRoutingModule),
  },
  {
    path: 'path-not-found',
=======
    path: '**',
>>>>>>> 115419498f4bc634c0c3b36fe07a8810910ac144
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];
<<<<<<< HEAD
//snipets : lazy   aroute

@NgModule({
  imports: [RouterModule.forRoot(routes)],
=======

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
>>>>>>> 115419498f4bc634c0c3b36fe07a8810910ac144
  exports: [RouterModule],
})
export class AppRoutingModule {}
