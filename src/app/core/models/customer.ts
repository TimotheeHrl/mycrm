import { customerI } from "../interfaces/customer-i";
import { OrderI } from "../interfaces/order-i";
export class Customer implements customerI {
  active!: boolean;
  adress!: string;
  city!: string;
  company!: string;
  country!: string;
  firstName!: string;
  id!: number;
  lastName!: string;
  mail!: string;
  orders!: OrderI[];
  password!: string;

  phone!: string;
  zipCode!: string;
  constructor(obj?: Partial<Customer>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
