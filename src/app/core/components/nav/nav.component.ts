import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../authServices/login.service";
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  logout() {
    this.loginService.logOut();
  }
  ngOnInit(): void {}
}
