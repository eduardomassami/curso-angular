import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component'
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

const ROUTES: Routes = [
  {path: '', component: OrderComponent}
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
  declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
  providers: []
})
export class OrderModule {}
