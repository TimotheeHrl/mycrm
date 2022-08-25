import { Component, OnInit } from "@angular/core";
import { faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { DataSharingService } from "../../DataSharingService";

@Component({
  selector: "app-icon-close",
  templateUrl: "./icon-close.component.html",
  styleUrls: ["./icon-close.component.scss"],
})
export class IconCloseComponent implements OnInit {
  public myIcon: IconDefinition = faTimes;

  isClose!: boolean;

  constructor(private dataSharingService: DataSharingService) {
    this.dataSharingService.isClosed.subscribe((value) => {
      this.isClose = value;
    });
  }
  ngOnInit(): void {}
}
