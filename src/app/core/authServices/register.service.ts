import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const BACKEND_URL = environment.urlApi + "/api/auth/signup";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerUser = async (obj: any) =>
    new Promise<any>((resolve, rejects) => {
      const data: any = obj;
      console.log(data);

      this.http.post<any>(BACKEND_URL, data).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          rejects(error);
        }
      );
    });
}
