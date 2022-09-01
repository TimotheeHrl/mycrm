import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private token = environment.token;

  private urlApi = environment.urlApi;
  public customers$: Observable<Order[]>;
  constructor(private httpClient: HttpClient) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    }); //JSON.parse(localStorage.getItem('mpManagerToken')
    this.customers$ = this.httpClient.get<Order[]>(
      `${this.urlApi}/api/orders/all`,
      { headers: reqHeader }
    );
  }
}
