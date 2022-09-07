import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Customer } from "src/app/core/models/customer";
import { ClientsService } from "../../services/clients.service";
@Component({
  selector: "app-page-add-client",
  templateUrl: "./page-add-client.component.html",
  styleUrls: ["./page-add-client.component.scss"],
})
export class PageAddClientComponent implements OnInit {
  @Input() public init!: Customer;
  public customer!: Customer;

  constructor(public clientsService: ClientsService, private router: Router) {
    this.customer = new Customer();
  }
  public action(customer: Customer): void {
    this.clientsService.add(customer).subscribe((data) => {
      this.router.navigate(["clients"]);
    });
  }
  ngOnInit(): void {}
}
