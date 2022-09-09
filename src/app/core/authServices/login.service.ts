import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { ResLoginI } from "../interfaces/resLogin-i";

const BACKEND_URL = environment.urlApi + "/api/auth/signin";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  loginUser = async (obj: any) =>
    new Promise<any>((resolve, rejects) => {
      const data: any = obj;
      console.log(data);

      this.http.post<any>(BACKEND_URL, data).subscribe(
        (response: ResLoginI) => {
          resolve(response);
          localStorage.setItem("username", response.username);
          localStorage.setItem("id", response.id.toString());
          localStorage.setItem("email", response.email);
          const token = response.accessToken;
          document.cookie = `token=${token}`;
        },
        (error) => {
          rejects(error);
        }
      );
    });

  loggedIn() {
    const cookie = document.getElementById("token");
    return !!cookie?.textContent;
  }

  logOut() {
    const cookie = document.getElementById("token");
    cookie?.remove();
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    this.router.navigate(["signin"]);
  }
  getToken() {
    const cookie = document.getElementById("token");
    return !!cookie?.textContent;
  }
}
