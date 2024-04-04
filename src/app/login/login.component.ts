import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private services: ApiService, private router: Router) {}

  checkUsers:any;
  ngOnInit(): void {
  this.checkUsers = this.services.getUsers();
  }

  loginForm = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
  });

  onSubmit(data: any) {
  
    if (this.checkUsers) {
      this.checkUsers.filter((ele:any)=>{
          if(ele.username == data.value.username)
          {
              this.router.navigate(['/user-details']);
          }else
          {
              this.router.navigate(['/register']);
          }
      })

    } else {
      this.router.navigate(['/register']);
    }
  }
}
