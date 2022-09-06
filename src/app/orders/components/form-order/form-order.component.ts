import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { StateOrder } from "src/app/core/enums/state-order";
import { Order } from "src/app/core/models/order";
@Component({
  selector: "app-form-order",
  templateUrl: "./form-order.component.html",
  styleUrls: ["./form-order.component.scss"],
})
export class FormOrderComponent implements OnInit {
  @Input() public init!: Order;
  public states = Object.values(StateOrder);
  public form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      type: [this.init.type],
      customer: [this.init.customer],
      label: [this.init.label],
      numberOfDay: [this.init.numberOfDay],
      unitPrice: [this.init.unitPrice],
      status: [this.init.status],
      tva: [this.init.tva],
    });
  }
}