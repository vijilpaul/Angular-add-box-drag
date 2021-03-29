import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainListFormComponent } from './components/main-list-form/main-list-form.component';
import { SublistFormComponent } from './components/sublist-form/sublist-form.component';



@NgModule({
  declarations: [MainListFormComponent, SublistFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [MainListFormComponent, SublistFormComponent]
})
export class SharedModule { }
