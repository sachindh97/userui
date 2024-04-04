import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private service:ApiService){}

  userList:any;

  ngOnInit(): void {
  this.userList=this.service.getUsers();  
  }

}
