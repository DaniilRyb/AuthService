import {Component} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService) {
  }

  IsLogin() {
    if (localStorage.getItem("auth_token")) {
      return false
    } else return true
  }


}
