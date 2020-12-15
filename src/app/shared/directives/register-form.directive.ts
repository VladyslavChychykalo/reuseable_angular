import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Directive({
  selector: '[appRegisterForm]',
})
export class RegisterFormDirective implements OnInit {
  private el: HTMLInputElement;

  @Input('registerForm') public form: NgForm;
  @Input('registerModel') public model: NgModel;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    if (this.form && this.model) {
      this.form.form.addControl(this.model.name, this.model.control);
    }
  }
}
