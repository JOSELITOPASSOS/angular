import { PlatformDetectorService } from './../../core/plataform-detector/plataform-detector.service';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { UserNoTakenValidatorService } from './user-not-taken.validator.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signup.component.html',
  providers: [UserNoTakenValidatorService]
})
export class SignUpComponent implements OnInit, AfterViewInit {

  signupForm!: FormGroup;
  @ViewChild('emailInput')
  emailInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNoTakenValidatorService: UserNoTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ){

  }
  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
          this.emailInput?.nativeElement.focus();
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
          [
            Validators.required,
            Validators.email
          ]
      ],
      userName: ['',
          [
            Validators.required,
            // Validators.pattern(/^[a-z]+[0-9]*$/),
            lowerCaseValidator,
            Validators.minLength(2),
            Validators.maxLength(30),
          ],
          this.userNoTakenValidatorService.checkUserNameTaken()
      ],
      fullName: ['',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(40),
          ]
      ],
      password: ['',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(14)
          ]
      ]
    });
  }

  signup(){
    const newUSer = this.signupForm.getRawValue() as NewUser;
    this.signUpService.signup(newUSer).subscribe(
                () => this.router.navigate(['']),
                err => console.log(err)
            );
  }

}
