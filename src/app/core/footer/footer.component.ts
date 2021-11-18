import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';

@Component({
  selector: 'ap-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit{

  user$!: Observable<User | null>;
  constructor(
    private userService: UserService){
  }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }
}
