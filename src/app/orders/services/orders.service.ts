import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { StateOrder } from "src/app/core/enums/state-order";
import { Order } from "src/app/core/models/order";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class OrdersService {
  private urlApi = environment.urlApi;
  public order$!: Observable<Order>;
  public orders$: BehaviorSubject<Order[]>;
  constructor(private httpClient: HttpClient) {
    this.orders$ = new BehaviorSubject<Order[]>([]);
    this.refreshCollection();
  }

  public refreshCollection(): void {
    this.httpClient
      .get<Order[]>(`${this.urlApi}/api/orders/all`)
      .subscribe((data) => {
        this.orders$.next(data);
      });
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.status = state;
    return this.update(obj);
  }

  public update(item: Order): Observable<Order> {
    return this.httpClient
      .put<Order>(`${this.urlApi}/api/orders/update/${item.id}`, item)
      .pipe(tap(() => this.refreshCollection()));
  }

  public add(item: Order): Observable<Order> {
    return this.httpClient
      .post<Order>(`${this.urlApi}/api/orders/add`, item)
      .pipe(tap(() => this.refreshCollection()));
  }
  public delete(id: number): Observable<Order> {
    return this.httpClient
      .delete<Order>(`${this.urlApi}/api/orders/delete/${id}`)
      .pipe(tap(() => this.refreshCollection()));
  }
  public get(id: number): Observable<Order> {
    this.order$ = this.httpClient.get<Order>(`${this.urlApi}/api/orders/${id}`);

    return this.order$;
  }
}
