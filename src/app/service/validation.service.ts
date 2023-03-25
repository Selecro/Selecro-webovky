import { Injectable } from '@angular/core';
import { Language } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateLogin(email: string, password: string): boolean {
    return (email.length >= 4 || email.includes("@")) && password.length >= 8
  }
  
  validateRegister(email: string, password0: string, password1: string, username: string): boolean {
    return email.includes("@") && password0 == password1 && password0.length >= 8 && username.length >= 4
  }
}