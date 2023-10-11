import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KmsService {
  private readonly kmsUrl = environment.kmsUrl;
  private readonly httpOptions = {
    headers: new HttpHeaders()
  };
  private readonly token: string | null;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.token = this.tokenService.getKmsToken();
    this.httpOptions = {
      headers: new HttpHeaders({
        'X-Vault-Token': `${this.token}`
      })
    };
  }

  userpassLogin(id: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${this.kmsUrl}/v1/auth/userpass/login/${id}`, {
      password: password,
    }, httpOptions);
  }

  renewToken(): Observable<any> {
    return this.http.post(`${this.kmsUrl}/v1/auth/token/renew-self`,
      this.httpOptions);
  }

  decryptData(id: string, encryptedData: string): Observable<any> {
    return this.http.post(`${this.kmsUrl}/v1/transit/decrypt/${id}`, {
      ciphertext: encryptedData,
    }, this.httpOptions);
  }

  encryptData(id: string, dataToEncrypt: string): Observable<any> {
    return this.http.post(`${this.kmsUrl}/v1/transit/encrypt/${id}`, {
      plaintext: dataToEncrypt,
    }, this.httpOptions);
  }

  encryptSignup(id: string, token: string, dataToEncrypt: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Vault-Token': `${token}`
      })
    };
    return this.http.post(`${this.kmsUrl}/v1/transit/encrypt/${id}`, {
      plaintext: btoa(dataToEncrypt),
    }, httpOptions);
  }
}
