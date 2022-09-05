import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "src/app/core/models/customer";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class ClientsService {
  private token = environment.token;
  private headersA!: HttpHeaders;

  private urlApi = environment.urlApi;
  public customers$: Observable<Customer[]>;
  constructor(private httpClient: HttpClient) {
    this.headersA = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.token,
    });

    this.customers$ = this.httpClient.get<Customer[]>(
      `${this.urlApi}/api/customers/all`,
      { headers: this.headersA }
    );
  }

  public changeActive(
    customer: Customer,
    state: boolean
  ): Observable<Customer> {
    const obj = new Customer(customer);
    obj.active = state;
    return this.update(obj);
  }
  private update(obj: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(
      `${this.urlApi}/api/customers/update/${obj.id}`,
      obj,
      { headers: this.headersA }
    );
  }
}
