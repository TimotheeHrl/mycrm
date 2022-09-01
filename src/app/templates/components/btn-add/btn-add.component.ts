import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-btn-add",
  templateUrl: "./btn-add.component.html",
  styleUrls: ["./btn-add.component.scss"],
})
export class BtnAddComponent implements OnInit {
  @Input() link: string;
  @Input() label: string;
  constructor() {
    this.label = "add";
    this.link = "add";
  }

  ngOnInit(): void {}
}
