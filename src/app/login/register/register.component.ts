import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RegisterService } from "../../core/authServices/register.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }
  onSubmit() {
    console.log("SUBMIT EXECUTED");
    console.log(this.registerForm.value);
    this.registerService
      .registerUser(this.registerForm.value)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["sign-in"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
