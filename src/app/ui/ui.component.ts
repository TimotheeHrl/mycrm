import { Component, OnInit } from "@angular/core";
import { DataSharingService } from "../DataSharingService";

@Component({
  selector: "app-ui",
  templateUrl: "./ui.component.html",
  styleUrls: ["./ui.component.scss"],
})
export class UiComponent implements OnInit {
  public isClose!: boolean;

  constructor(private dataSharingService: DataSharingService) {
    this.dataSharingService.isClosed.subscribe((value) => {
      this.isClose = value;
    });
  }

  public runToggle() {
    this.dataSharingService.isClosed.next(!this.isClose);
  }

  ngOnInit(): void {}
}
