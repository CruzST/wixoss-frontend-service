import { Injectable } from '@angular/core';
import { UserRequest } from 'src/app/dto/payloads/userRequest';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/dto/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  authenticationEndpoint: string = environment.backendServiceLocal + '/auth';

  constructor(private http: HttpClient) {
  }

  registerNewUser(newUserRequest: UserRequest): Observable<any> {
    const body: string = JSON.stringify(newUserRequest);
    const headers = { 'content-type': 'application/json'};
    return this.http.post(this.authenticationEndpoint + '/register', body, {'headers':headers});
  }
}
