import { Component, OnInit } from "@angular/core";
import { ClientI } from "src/app/core/interfaces/client-i";
import { ClientService } from "../../../core/services/client.service";
@Component({
  selector: "app-page-list-clients",
  templateUrl: "./page-list-clients.component.html",
  styleUrls: ["./page-list-clients.component.scss"],
})
export class PageListClientsComponent implements OnInit {
  public clients!: ClientI[];
  constructor(public clientService: ClientService) {
    this.clientService.customers$.subscribe();
  }

  ngOnInit(): void {}
}
