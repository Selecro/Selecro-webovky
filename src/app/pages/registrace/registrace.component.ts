import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, TokenService } from 'src/app/service';
import { ValidationService } from 'src/app/service';
import { Language } from 'src/app/types';

@Component({
  selector: 'app-registrace',
  templateUrl: './registrace.component.html',
  styleUrls: ['./registrace.component.css']
})
export class RegistraceComponent implements OnInit {

  showPassword0: boolean = false;
  showPassword1: boolean = false;
  email: string = "";
  username: string = "";
  password0: string = "";
  password1: string = "";
  isSuccessful: boolean = false;
  isSignUpFailed: boolean = false;
  errorMessage: string = "";
  alertController: any;
  upozorneni: string = "";

  constructor(private router: Router, private authService: AuthService, private validationService: ValidationService, private tokenStorage: TokenService, private translate: TranslateService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.router.navigate(["profile"]);
    }
  }

  /*public passwordCheck(): boolean{
    return this.passwordRegEx.test(this.password0) && this.passwordRegEx.test(this.password1)
  }*/

  register(): void {
    if (this.validationService.validateRegister(this.email, this.password0, this.password1, this.username)) {
      this.authService.register(this.email, this.username, this.password0, this.language()).subscribe(
        data => {
          window.alert("Verifikujte si email do 1 hodiny");
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(["prihlaseni"]);
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          if (err == "Network Error") {
            this.upozorneni = "Špatné připojení k internetu.";
          }
          else if (err == "email already exist:" + this.email) {
            this.upozorneni = "Zadaný email již existuje."
          }

          else if (err == "username already exist:" + this.email) {
            this.upozorneni = "zadané uživatelské jméno již existuje."
          }

          else if (err == "username already exist:" + this.email) {
            this.upozorneni = "zadané uživatelské jméno již existuje."
          }
          else {
            this.upozorneni = "jina chyba";
          }
        }
      );
    }
    else if(this.validationService.validatePassword(this.password0, this.password1)) {
      this.upozorneni = "Zadaná hesla se neshodují."
    }
    else if (!this.email) {
      this.upozorneni = "Špatně zadaný email, nebo uživatelské jméno."
    }
  }

  language(): Language {
    if (this.translate.currentLang === "EN") {
      return Language.EN;
    }
    else {
      return Language.CZ;
    }
  }
}