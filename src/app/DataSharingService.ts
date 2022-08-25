import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataSharingService {
  public isClosed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
}
