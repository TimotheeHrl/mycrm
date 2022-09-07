import { OrderI } from "./order-i";

export interface customerI {
  active: boolean;
  adress: string;
  city: string;
  company: string;
  country: string;
  firstname: string;
  id: number;
  lastname: string;
  mail: string;
  orders: OrderI[];
  password: string;

  phone: string;
  zipCode: string;
}
