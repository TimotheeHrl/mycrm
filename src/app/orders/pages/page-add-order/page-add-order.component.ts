import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StateOrder } from "src/app/core/enums/state-order";
import { Order } from "src/app/core/models/order";
import { OrdersService } from "src/app/orders/services/orders.service";
@Component({
  selector: "app-page-add-order",
  templateUrl: "./page-add-order.component.html",
  styleUrls: ["./page-add-order.component.scss"],
})
export class PageAddOrderComponent implements OnInit {
  @Input() public init!: Order;
  public order!: Order;
  public states = Object.values(StateOrder);

  constructor(public ordersService: OrdersService, private router: Router) {
    this.order = new Order();
  }
  public action(order: Order): void {
    this.ordersService.add(order).subscribe((data) => {
      this.router.navigate(["orders"]);
    });
  }

  ngOnInit(): void {}
}
