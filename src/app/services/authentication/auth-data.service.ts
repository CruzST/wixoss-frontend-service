import { Injectable } from '@angular/core';
import { UserRequest } from 'src/app/dto/payloads/userRequest';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from 'src/app/dto/payloads/loginRequest';
import { User } from 'src/app/dto/models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  authenticationEndpoint: string = environment.backendServiceLocal + '/auth';

  constructor(private http: HttpClient) {
  }

  registerNewUser(newUserRequest: UserRequest) {
    const body: string = JSON.stringify(newUserRequest);
    const headers = { 'content-type': 'application/json' };
    return this.http.post(this.authenticationEndpoint + '/register', body, {'headers' : headers}).subscribe(resp => {
      console.log(resp);
    });
  }

  // Using basic Auth
  // login(loginRequest: LoginRequest) {
  //   let httpHeaders = new HttpHeaders({});
  //   const creds = window.btoa(`${loginRequest.getEmail()}:${loginRequest.getPassword()}`);
  //   httpHeaders = httpHeaders.append('Authorization', `Basic ${creds}`);
  //   this.http.get(this.authenticationEndpoint + '/login/' + loginRequest.getEmail(), {headers : httpHeaders, observe: 'response'})
  //   .subscribe((resp: any) => {
  //     console.log('resp', resp)
  //       const user: User = resp.body as User;
  //       const jwt: string = resp.headers.get('Authorization') ?? '';
  //       localStorage.setItem('authToken', jwt);
  //       localStorage.setItem('authorities', user.authorities.toString());
  //   });
  // }

  // Using custom endpoint and auth logic
  login(loginRequest: LoginRequest) {
    let httpHeaders = new HttpHeaders({});
    const creds = window.btoa(`${loginRequest.getEmail()}:${loginRequest.getPassword()}`);
    httpHeaders = httpHeaders.append('Authorization', creds);
    this.http.get(this.authenticationEndpoint + '/login', {headers : httpHeaders, observe: 'response'})
    .subscribe((resp: any) => {
      console.log('resp', resp)
        const user: User = resp.body as User;
        const jwt: string = resp.headers.get('Authorization') ?? '';
        localStorage.setItem('authToken', jwt);
    });
  }
}
