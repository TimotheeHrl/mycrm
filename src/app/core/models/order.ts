import { StateOrder } from "../enums/state-order";
import { customerI } from "../interfaces/customer-i";
import { OrderI } from "../interfaces/order-i";
export class Order implements OrderI {
  status!: StateOrder.OPTION;
  unitPrice!: number;
  numberOfDay!: number;
  tva!: number;
  label!: string;
  type!: string;
  id!: number;
  customer!: customerI;
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
