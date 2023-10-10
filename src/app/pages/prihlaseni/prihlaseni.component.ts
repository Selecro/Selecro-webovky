import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PublicService } from 'src/app/service';
import { ValidationService } from 'src/app/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.component.html',
  styleUrls: ['./prihlaseni.component.css']
})
export class PrihlaseniComponent implements OnInit {

  showPassword: boolean = false;
  password: string = "";
  email: string = "";
  email1: string = "";

  constructor(private validationService: ValidationService, public translate: TranslateService, private publicService: PublicService) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.validationService.validateLogin(this.email, this.password)) {
      console.log(this.email + this.password);
      this.publicService.login(this.email, this.password).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
          Swal.fire({
            title: 'Login Failed',
            text: error.error.error.message + '. Please try again later.',
            icon: 'error',
          });
        }
      );
    }
  }

  sendPasswordChange(): void {
    if (this.validationService.validateEmail(this.email1)) {
      this.publicService.sendPasswordChange(this.email1).subscribe();
      Swal.fire({
        title: 'Password Reset',
        text: 'If you are registered, you should check your mailbox.',
        icon: 'info',
      });
    }
  }
}
