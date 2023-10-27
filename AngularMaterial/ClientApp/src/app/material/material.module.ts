import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';


const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatStepperModule
];


@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents] 
})
export class MaterialModule { }
