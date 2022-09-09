import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
      type: [
        this.init.type,
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ],
      customer: [this.init.customer, Validators.required],
      label: [this.init.label, Validators.required],
      numberOfDay: [
        this.init.numberOfDay,
        Validators.compose([Validators.required, Validators.min(1)]),
      ],
      unitPrice: [
        this.init.unitPrice,
        [Validators.required, Validators.min(1)],
      ],
      status: [this.init.status, Validators.required],
      tva: [this.init.tva, Validators.required],
      id: [this.init.id],
    });
  }
  public onSubmit(): void {
    let indexCustomer = this.collection.findIndex(
      (item) => item.id === this.form.get("customer")?.value
    );
    this.form.controls["customer"].setValue(this.collection[indexCustomer]);

    console.log(this.form.value);

    this.formSubmited.emit(this.form.value);
  }
}
