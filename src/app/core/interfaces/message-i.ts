import { UserI } from "./user-i";
export interface MessageI {
  text: string;
  user: UserI;
  date: Date;
}
