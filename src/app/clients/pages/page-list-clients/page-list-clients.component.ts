import { Component, OnInit } from "@angular/core";
import { customerI } from "src/app/core/interfaces/customer-i";
import { ClientsService } from "../../services/clients.service";
@Component({
  selector: "app-page-list-clients",
  templateUrl: "./page-list-clients.component.html",
  styleUrls: ["./page-list-clients.component.scss"],
})
export class PageListClientsComponent implements OnInit {
  public myTitle: string;
  public myLabel: string;
  public collection!: customerI[];
  public headers!: string[];

  constructor(private clientsService: ClientsService) {
    this.myTitle = "List of Clients";
    this.myLabel = "Hello World Client";
    this.clientsService.customers$.subscribe(
      (data) => (this.collection = data)
    );
    this.clientsService.customers$.subscribe((data) => console.log(data));
    this.headers = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "company",
      "orders",
    ];
  }
  ngOnInit(): void {}
}
