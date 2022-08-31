import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
  id = 0;
  firstName = "fer";
  lastName = "";
  mail = "szef@ezfer.fr";
  phone = "1234567890";
  adress = "zfrzzef";
  city = "Lille";
  zipCode = "59000";
  country = "France";
  active = true;
  company = "scse";

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
