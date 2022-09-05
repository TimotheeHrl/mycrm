import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[appState]",
})
export class StateDirective {
  @Input() appState!: string;
  @HostBinding("class") public tdClassName!: string;
  constructor() {}
  ngOnChange() {
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
    console.log(this.appState);
  }
}
