import { TokenService } from './../token/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  authenticate(userName: string, password: string) {
    return this.http.post(`${this.API_URL}/user/login`, {userName, password}, {observe: 'response'}).pipe(
      tap( res => {
                    const authToken: string = res.headers.get('x-access-token') ?? '';
                    this.tokenService.setToken(authToken);
                    // window.localStorage.setItem('authToken', authToken);
                    console.log(`User ${userName} authenticated with token ${authToken}`)
      })
    );
  }
}
