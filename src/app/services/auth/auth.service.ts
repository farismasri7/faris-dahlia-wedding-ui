import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  admin: any;
  isAdmin: any;

  constructor(private http: HttpClient) { }

  authenticateAdmin(admin: any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://farisanddahlia.com/admin/authenticate', admin, {headers: headers})
      .pipe(map((res) => JSON.parse(JSON.stringify(res))));
  }

  getAdmin(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get('https://farisanddahlia.com/admin/profile', {headers: headers})
      .pipe(map((res) => JSON.parse(JSON.stringify(res))));
  }

  storeUserData(token: any, admin: any){
    localStorage.setItem('id_token', token);
    localStorage.setItem('admin', JSON.stringify(admin));
    this.authToken = token;
    this.admin = admin;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    this.loadToken();
    const helper = new JwtHelperService();
    return helper.isTokenExpired(this.authToken);
  }

  logout(){
    this.authToken = null;
    this.admin = null;
    localStorage.clear();
  }

}
