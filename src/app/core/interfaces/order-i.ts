import { StateOrder } from "../enums/state-order";
import { customerI } from "../interfaces/customer-i";
export interface OrderI {
  status: StateOrder;
  unitPrice: number;
  numberOfDay: number;
  tva: number;
  label: string;
  type: string;
  id: number;
  customer: customerI;
}
