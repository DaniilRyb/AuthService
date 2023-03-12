import {Component} from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {

  }

  Login() {
    console.log("you are logging in")
    console.log(this.email, this.password)
    this.authService.login(this.email, this.password)

  }

  ngOnInit() {
  }


}
