import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-btn-edit",
  templateUrl: "./btn-edit.component.html",
  styleUrls: ["./btn-edit.component.scss"],
})
export class BtnEditComponent implements OnInit {
  @Input() link: string;
  @Input() label: string;
  @Input() idItem!: number;
  constructor() {
    this.label = "edit";
    this.link = "edit/";
  }
  ngOnInit(): void {}
}
