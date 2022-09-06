import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";
import { Customer } from "./customer";
export class Order implements OrderI {
  status!: StateOrder;
  unitPrice!: number;
  numberOfDay!: number;
  tva!: number;
  label!: string;
  type!: string;
  id!: number;
  customer!: Customer;
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
