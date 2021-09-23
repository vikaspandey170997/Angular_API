import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   MatToolbarModule, 
   MatButtonModule, 
   MatIconModule, 
   MatExpansionModule,
   MatCardModule
  } from '@angular/material'; 

import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MaterialButtonComponent } from './material-button/material-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule
  ],
  declarations: [MaterialDemoComponent, MaterialButtonComponent]
})
export class MaterialModule { }
