import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { PageNotFoundComponent } from '../page-not-found/pages/page-not-found/page-not-found.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
const routes: Routes = [
  { path: '', component: PageListOrdersComponent },
  { path: 'edit/{id}', component: PageEditOrderComponent },
  { path: 'add', component: PageAddOrderComponent },
  { path: 'not-found', component: PageNotFoundComponent },
=======
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  { path: '', component: PageListOrdersComponent },
  { path: 'add', component: PageAddOrderComponent },
  { path: 'edit', component: PageEditOrderComponent },
>>>>>>> 115419498f4bc634c0c3b36fe07a8810910ac144
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
