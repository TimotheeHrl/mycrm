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

  private urlApi = environment.urlApi;
  public customers$: Observable<Customer[]>;
  constructor(private httpClient: HttpClient) {
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    });
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.token,
    }); //JSON.parse(localStorage.getItem('mpManagerToken')
    this.customers$ = this.httpClient.get<Customer[]>(
      `${this.urlApi}/api/customers/all`,
      { headers: reqHeader }
    );
  }
}
