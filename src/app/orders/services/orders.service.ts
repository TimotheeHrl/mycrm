import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StateOrder } from "src/app/core/enums/state-order";
import { Order } from "src/app/core/models/order";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  private token = environment.token;

  private urlApi = environment.urlApi;
  public order$ = new Observable<Order>();
  public orders$: Observable<Order[]>;
  constructor(private httpClient: HttpClient) {
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    });
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.token,
    }); //JSON.parse(localStorage.getItem('mpManagerToken')
    this.orders$ = this.httpClient.get<Order[]>(
      `${this.urlApi}/api/orders/all`,
      { headers: reqHeader }
    );
  }
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.status = state;
    return this.update(obj);
  }

  public update(item: Order): Observable<Order> {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.token,
    });
    return this.httpClient.put<Order>(
      `${this.urlApi}/api/orders/update/${item.id}`,
      item,
      { headers: reqHeader }
    );
  }
}
