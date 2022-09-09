import {  HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req:any, next:any){
    let authService = this.injector.get(LoginService)
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.getToken()}`
      }
    })

    return next.handle(tokenizedReq)
  }
}
