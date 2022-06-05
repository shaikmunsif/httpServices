import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../services/user-service.service'
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  users:any;
  constructor(private userServiceService:UserServiceService) { }

  ngOnInit(): void {
   this.userServiceService.getUsers().subscribe(data=>{
      this.users = data;
    });
    console.log("called API", this.users);
  }

}
