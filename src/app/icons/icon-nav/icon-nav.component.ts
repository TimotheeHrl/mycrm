import { Component, OnInit } from "@angular/core";
import { faBars, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { DataSharingService } from "../../DataSharingService";

@Component({
  selector: "app-icon-nav",
  templateUrl: "./icon-nav.component.html",
  styleUrls: ["./icon-nav.component.scss"],
})
export class IconNavComponent implements OnInit {
  public myIcon: IconDefinition = faBars;

  isClose!: boolean;

  constructor(private dataSharingService: DataSharingService) {
    this.dataSharingService.isClosed.subscribe((value) => {
      this.isClose = value;
    });
  }
  ngOnInit(): void {}
}
