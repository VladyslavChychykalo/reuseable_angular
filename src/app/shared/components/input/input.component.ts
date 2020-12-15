import { Component, OnInit, Input } from '@angular/core';
// import { RegisterFormDirective } from '../../directives/register-form.directive';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() placeholder;
  @Input() type;
  @Input() id;
  @Input() labelText;
  @Input() name;
  @Input() mb = false;
  @Input() form;
  @Input() required = false;

  constructor() {}

  ngOnInit(): void {}
}
