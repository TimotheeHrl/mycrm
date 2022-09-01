import { Component, OnInit } from '@angular/core';
import { OrderI } from 'src/app/core/interfaces/order-i';
import { OrdersService } from '../../services/orders.service';
@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public myTitle: string;
  public myLabel: string;
  public collection!: OrderI[];
  public headers!: string[];

  constructor(private ordersService: OrdersService) {
    this.myTitle = 'List of orders';
    this.myLabel = 'Hello World Order';
    this.ordersService.customers$.subscribe((data) => (this.collection = data));
    this.ordersService.customers$.subscribe((data) => console.log(data));
    this.headers = ['unitPrice', 'numberOfDay', 'label', 'type'];
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.myTitle = 'le titre a changé';
  }
}
