import { Component } from '@angular/core';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.css'],
})
export class PasswordFieldComponent {
  fieldTextType = false;
  passVal = '';
  state = '';
  passParams = {
    letters: false,
    digits: false,
    symbols: false
  };

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  checkeStrength(password: string) {
    this.passParams.letters = (/[A-Za-z]+/.test(password)) ? true : false;
    this.passParams.digits = (/[0-9]+/.test(password)) ? true : false;
    this.passParams.symbols = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password)) ? true : false;
  }

  checkPass() {
    if (this.passVal.length == 0) {
      this.state = '';
    } else if (this.passVal.length < 8) {
      this.state = 'small';
    } else {
      this.checkeStrength(this.passVal);
      let strengthVal = Object.values(this.passParams).filter(val => val).length;
      switch (strengthVal) {
        case 1:
          this.state = 'easy';
          break;
        case 2:
          this.state = 'medium';
          break;
        case 3:
          this.state = 'strong';
          break;
        default:
          this.state = '';
      }
    }
  }
}
