import { StateOrder } from '../enums/state-order';

export interface OrderI {
  status: StateOrder;
  unitPrice: StateOrder;
  numberOfDay: string;
  label: string;
  type: string;
  id: number;
}
