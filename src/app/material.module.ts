import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule
  ],
  exports:[
    MatButtonModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
