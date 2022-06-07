import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  constructor(private userService: UserServiceService) {}

  firstName: string ="";
  terms!: boolean;
  customerType: string = "";
  description: string = "";
  title :string = "";
  

  ngOnInit(): void {}

  addCustomer(data: NgForm) {
     
    console.log(data);
    this.userService.addCustomer(data.value);

  }

  addCustomerEx2(data: NgForm) {
     
    console.log(data);
    this.userService.addCustomer(data.value).subscribe((data)=>{
      console.log("post api response", data);
    },
    (err)=>{
      console.log("THere is an issue while calling API");
    });

  }

  resetForm(customerForm: NgForm) {
    customerForm.resetForm();
  }
}
