import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports : [
    CustomersComponent
  ]
})
export class CustomersModule { }
