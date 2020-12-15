import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

@NgModule({
  declarations: [InputComponent, ModalComponent, MainHeaderComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [MainHeaderComponent, InputComponent, FormsModule],
})
export class SharedModule {}
