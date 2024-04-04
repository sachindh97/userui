import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private services: ApiService, private router: Router) {}
  getUsrs:any=[];

  ngOnInit(): void {
    this.getUsrs= this.services.getUsers();
    this.getUsrs = this.getUsrs ? this.getUsrs : [];
  }

  RegisterForm = new FormGroup({
    name: new FormControl(null),
    username: new FormControl(null),
    password: new FormControl(null),
  });

  onSubmit(data: any) {
    let body = {
      name: data.value.name,
      username: data.value.username,
      password: data.value.password,
    };


    
    this.getUsrs.push(body)
    this.services.saveUsers(this.getUsrs);
    this.router.navigate(['/user-details']);

  }
}
