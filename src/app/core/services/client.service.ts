import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Client } from "../models/client";

export class ClientService {
  public token: string =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY2MTg3MDk5NSwiZXhwIjoxNjYxOTU3Mzk1fQ.Judjhyzgia-E5IcYchndXw7X_YUx7JEFeN2dS3tBri6mQiBgYu3kvSJ2Q4P9eq6mY-Em1wUBD7w8eaXVi0rmPw";
  private urlApi = environment.urlApiCrm;
  public customers$: Observable<Client[]>;
  constructor(private httpClient: HttpClient) {
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    });
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.token,
    }); //JSON.parse(localStorage.getItem('mpManagerToken')
    this.customers$ = this.httpClient.get<Client[]>(
      `${this.urlApi}/customers/all`,
      { headers: reqHeader }
    );
  }
}
