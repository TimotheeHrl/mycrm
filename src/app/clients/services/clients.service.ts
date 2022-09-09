import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
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
  public customerBehavior$!: BehaviorSubject<Customer>;

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
    console.log(obj);
    return this.httpClient.put<Customer>(
      `${this.urlApi}/api/customers/update/${obj.id}`,
      obj,
      { headers: this.headersA }
    );
  }

  public add(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(
      `${this.urlApi}/api/customers/add`,
      customer,
      { headers: this.headersA }
    );
  }
  public delete(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(
      `${this.urlApi}/api/customers/delete/${id}`,
      { headers: this.headersA }
    );
  }
  public get(id: number): BehaviorSubject<Customer> {
    this.httpClient
      .get<Customer>(`${this.urlApi}/api/customers/${id}`, {
        headers: this.headersA,
      })
      .subscribe((data) => {
        this.customerBehavior$.next(data);
      });
    return this.customerBehavior$;
  }
}
