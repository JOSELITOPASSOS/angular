import { debounceTime, first, map, switchMap } from 'rxjs/operators';
import { SignUpService } from './signup.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class UserNoTakenValidatorService {

  constructor(private signUpService: SignUpService){}

  checkUserNameTaken(){
    return (control: AbstractControl) => {
      return control.valueChanges
          .pipe(debounceTime(300))
          .pipe( switchMap(userName =>
                    this.signUpService.checkUserNameTaken(userName)
           ))
           .pipe( map(isTaken => isTaken ? {userNameTaken: true} : null) )
           .pipe(first());
    }
  }
}
