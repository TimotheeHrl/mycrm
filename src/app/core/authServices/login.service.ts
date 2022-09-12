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
  public token!: String;
  constructor(private http: HttpClient, private router: Router) {
    this.token = this.getToken()!;
  }

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

  public getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(";");
    console.log(document.cookie);
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, "");
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return "";
  }
  getToken() {
    const cookie = this.getCookie("token");
    console.log(cookie);
    return cookie;
  }
}
