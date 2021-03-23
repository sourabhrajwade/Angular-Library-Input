import { Component, Input, OnInit, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements AfterContentInit {

  @Input() icon: string;
  @ContentChild(InputRefDirective, {static: false}) input: InputRefDirective;

  constructor() { }

  ngAfterContentInit() {
    if (!this.input) {
      console.error('the au-input needs a input inside it')
    }

  }

  @HostBinding('class.input-focus') 
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {
    };
    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }

}
