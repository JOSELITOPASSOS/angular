import { User } from './user';
import { Observable, BehaviorSubject } from 'rxjs';
import { TokenService } from './../token/token.service';
import { Injectable } from "@angular/core";
import jwtDecode from 'jwt-decode';

@Injectable( {providedIn: 'root'} )
export class UserService {

  private userName!: string;

  private userSubject = new BehaviorSubject<User | null>(null);
  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() &&
     this.decodeAndNotify();
   }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(): Observable<User | null>{
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    const user = jwtDecode(token) as User;
    this.userName = user.name as string;
    this.userSubject.next(user);
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogado(){
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
