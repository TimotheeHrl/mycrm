import { Component, OnInit } from "@angular/core";
import { StateOrder } from "src/app/core/enums/state-order";
import { OrderI } from "src/app/core/interfaces/order-i";
import { OrdersService } from "../../services/orders.service";
@Component({
  selector: "app-page-list-orders",
  templateUrl: "./page-list-orders.component.html",
  styleUrls: ["./page-list-orders.component.scss"],
})
export class PageListOrdersComponent implements OnInit {
  public myTitle: string;
  public myLabel: string;
  public collection!: OrderI[];
  public headers!: string[];
  public stateOrder!: string[];

  constructor(private ordersService: OrdersService) {
    this.myTitle = "List of orders";
    this.myLabel = "Hello World Order";
    this.ordersService.orders$.subscribe((data) => (this.collection = data));
    this.ordersService.orders$.subscribe((data) => console.log(data));
    this.headers = [
      "customer",
      "type",
      "label",
      "unitPrice",
      "number of days",
      "total TTC",
      "status",
    ];
    this.stateOrder = Object.values(StateOrder);
  }
  ngOnInit(): void {}
  public changeTitle(): void {
    this.myTitle = "le titre a changé";
  }
  public changeStatus(item: OrderI, event: any): void {
    const newState = event.target.value;
    this.ordersService.changeState(item, newState).subscribe((data) => {
      Object.assign(item, data);
    });
  }
  public delete(id: number): void {
    this.ordersService.delete(id).subscribe((data) => {
      this.collection = this.collection.filter((item) => item.id !== id);
    });
  }
  public edit(id: number): void {
    //redirect to edit page
    location.href = "/orders/edit?id=" + id;
  }
}
