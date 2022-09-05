import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appTrueFalseState]",
})
export class TrueFalseStateDirective {
  @Input() appTrueFalseState!: boolean;
  @HostBinding("class") tdClassName!: string;
  constructor() {}

  ngOnChange() {
    this.tdClassName = `state-${this.appTrueFalseState}`;
    console.log(this.appTrueFalseState);
  }
}
