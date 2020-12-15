import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { RegisterFormDirective } from './directives/register-form.directive';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    InputComponent,
    ModalComponent,
    MainHeaderComponent,
    RegisterFormDirective,
    ButtonComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [FormsModule, MainHeaderComponent, InputComponent, ButtonComponent],
})
export class SharedModule {}
