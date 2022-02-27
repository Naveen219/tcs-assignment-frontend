import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private userService: LoginuserService, private router: Router) {}

  ngOnInit(): void {}
  userLogin() {
    console.log(this.user);
    this.userService.loginUser(this.user).subscribe(
      (data) => {
        this.router.navigate(["../google-maps"])
      },
      (error) => 
      alert("Login failed. Please enter correct Username and Password")
    );
  }
}
