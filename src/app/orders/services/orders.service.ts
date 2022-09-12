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
  public order$!: Observable<Order>;
  public orders$: Observable<Order[]>;
  private headersA!: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.orders$ = this.httpClient.get<Order[]>(
      `${this.urlApi}/api/orders/all`
    );
  }
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.status = state;
    return this.update(obj);
  }

  public update(item: Order): Observable<Order> {
    return this.httpClient.put<Order>(
      `${this.urlApi}/api/orders/update/${item.id}`,
      item
    );
  }

  public add(item: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.urlApi}/api/orders/add`, item);
  }
  public delete(id: number): Observable<Order> {
    return this.httpClient.delete<Order>(
      `${this.urlApi}/api/orders/delete/${id}`
    );
  }
  public get(id: number): Observable<Order> {
    this.order$ = this.httpClient.get<Order>(`${this.urlApi}/api/orders/${id}`);

    return this.order$;
  }
}
