import { PlatformDetectorService } from './../../core/plataform-detector/plataform-detector.service';
import { AuthService } from './../../core/auth/auth.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit, AfterViewInit {

  loginForm!: FormGroup;

  @ViewChild('userNameInput')
  userNameInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuider: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
    ){ }

  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput?.nativeElement.focus();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuider.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(){
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.authenticate(userName, password).subscribe(
      () => this.router.navigate(['user', userName]),
      err => {
        console.log(err);
        this.loginForm.reset();
        this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput?.nativeElement.focus();
        alert('Invalid user name or password');
      }
    );
  }

}
