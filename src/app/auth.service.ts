import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:4000/api';
  token: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

  login(email: string, password: string) {
    this.http.post(this.url + '/authenticate', {email: email, password: password})
      .subscribe((resp: any) => {
        this.router.navigate(['profile']);
        localStorage.setItem('auth_token', resp.token);
      })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
