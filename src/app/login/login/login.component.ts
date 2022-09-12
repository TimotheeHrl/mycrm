import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../../core/authServices/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }
  onSubmit() {
    console.log("SUBMIT EXECUTED");
    console.log(this.loginForm.value);
    this.loginService
      .loginUser(this.loginForm.value)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["orders"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
