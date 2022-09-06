import { Component, Input, OnInit } from "@angular/core";
import { StateOrder } from "src/app/core/enums/state-order";
import { Order } from "src/app/core/models/order";

@Component({
  selector: "app-page-add-order",
  templateUrl: "./page-add-order.component.html",
  styleUrls: ["./page-add-order.component.scss"],
})
export class PageAddOrderComponent implements OnInit {
  @Input() public init!: Order;
  public order!: Order;
  public states = Object.values(StateOrder);

  constructor() {
    this.order = new Order();
  }

  ngOnInit(): void {}
}
