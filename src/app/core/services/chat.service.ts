import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { MessageI } from "../interfaces/message-i";
@Injectable({
  providedIn: "root",
})
export class ChatService {
  private urlApi = environment.urlApi;
  public messageGeneral$: BehaviorSubject<MessageI[]>;
  constructor(private httpClient: HttpClient) {
    this.messageGeneral$ = new BehaviorSubject<MessageI[]>([]);
    this.refreshCollection();
  }

  public refreshCollection(): void {
    this.httpClient
      .get<MessageI[]>(`${this.urlApi}/api/chat/general`)
      .subscribe((data) => {
        this.messageGeneral$.next(data);
      });
  }
}
