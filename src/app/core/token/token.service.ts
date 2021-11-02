import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TokenService {

  private KEY = 'authToken';

  hasToken(){
    return !!this.getToken();
  }

  setToken(token: string): void {
    window.localStorage.setItem(this.KEY, token)
  }

  getToken(): string {
    return window.localStorage.getItem(this.KEY) ?? '';
  }

  removeToken(){

  }

}
