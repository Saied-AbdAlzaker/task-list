import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {NgFor} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    DragDropModule
  ],
  exports:[
    MatListModule,
    DragDropModule
  ]
})
export class SharedModule { }
