import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ViewComponent
  ]
})
export class SharedModule { }
