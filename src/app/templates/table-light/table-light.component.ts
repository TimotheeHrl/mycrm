import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-table-light",
  templateUrl: "./table-light.component.html",
  styleUrls: ["./table-light.component.scss"],
})
export class TableLightComponent implements OnInit {
  @Input() public headers!: string[];
  @Input() public collection!: any;
  @Input() public i!: number;
  // public index!: number;
  constructor() {}

  ngOnInit(): void {}
}
