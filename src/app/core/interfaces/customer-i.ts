import { OrderI } from "./order-i";

export interface customerI {
  active: boolean;
  adress: string;
  city: string;
  company: string;
  country: string;
  firstName: string;
  id: number;
  lastName: string;
  mail: string;
  orders: OrderI[];
  password: string;

  phone: string;
  zipCode: string;
}
