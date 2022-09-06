import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ClientsService } from "src/app/clients/services/clients.service";
import { StateOrder } from "src/app/core/enums/state-order";
import { Customer } from "src/app/core/models/customer";
import { Order } from "src/app/core/models/order";
@Component({
  selector: "app-form-order",
  templateUrl: "./form-order.component.html",
  styleUrls: ["./form-order.component.scss"],
})
export class FormOrderComponent implements OnInit {
  @Input() public init!: Order;
  @Output() public formSubmited!: EventEmitter<Order>;
  public collection!: Customer[];
  public states = Object.values(StateOrder);
  public form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService
  ) {
    this.formSubmited = new EventEmitter<Order>();
    this.states = Object.values(StateOrder);
    this.clientsService.customers$.subscribe(
      (data) => (this.collection = data)
    );
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      type: [this.init.type],
      customer: [this.init.customer],
      label: [this.init.label],
      numberOfDay: [this.init.numberOfDay],
      unitPrice: [this.init.unitPrice],
      status: [this.init.status],
      tva: [this.init.tva],
      id: [this.init.id],
    });
  }
  public onSubmit(): void {
    console.log(this.form.value);

    this.formSubmited.emit(this.form.value);
  }
  public log(): void {
    console.log(this.form.value);
  }
}
