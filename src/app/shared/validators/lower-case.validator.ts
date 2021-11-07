import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {

  if( control.value.trim() && !/^[a-z]+[0-9]*$/.test(control.value) ) {
      return { lowerCase: true }
  }
  return null;
}