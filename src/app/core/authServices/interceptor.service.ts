import { HttpInterceptor } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req: any, next: any) {
    console.log("ici");
    let authService = this.injector.get(LoginService);
    let token: String | null | undefined = authService.getToken();
    console.log(token);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(tokenizedReq);
  }
}
