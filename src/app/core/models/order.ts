import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  status!: StateOrder.OPTION;
  unitPrice!: StateOrder;
  numberOfDay!: string;
  label!: string;
  type!: string;
  id!: number;
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
