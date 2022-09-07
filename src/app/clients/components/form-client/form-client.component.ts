import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Customer } from "src/app/core/models/customer";

@Component({
  selector: "app-form-client",
  templateUrl: "./form-client.component.html",
  styleUrls: ["./form-client.component.scss"],
})
export class FormClientComponent implements OnInit {
  @Input() public init!: Customer;
  @Output() public formSubmited!: EventEmitter<Customer>;
  public form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formSubmited = new EventEmitter<Customer>();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: [this.init.firstname],
      lastname: [this.init.lastname],
      mail: [this.init.mail],
      active: [this.init.active],
      phone: [this.init.phone],
      company: [this.init.company],
      adress: [this.init.adress],
      city: [this.init.city],
      zipCode: [this.init.zipCode],
      country: [this.init.country],
    });
  }
  public onSubmit(): void {
    console.log(this.form.value);
    this.formSubmited.emit(this.form.value);
  }
}
