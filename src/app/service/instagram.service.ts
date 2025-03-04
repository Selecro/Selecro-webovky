import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private apiUrl = 'https://graph.facebook.com';
  private accessToken = 'ble';
  private userId = '1111';

  constructor(private http: HttpClient) { }

  // Používáme HttpClient pro získání nejnovějšího příspěvku
  getLatestPost(): Observable<any> {
    const url = `${this.apiUrl}/${this.userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${this.accessToken}`;
    return this.http.get<any>(url);
  }

  // Získání základních informací o uživatelském účtu
  public async getAccountInfo(): Promise<any> {
    const url = `${this.apiUrl}/${this.userId}?fields=id,username&access_token=${this.accessToken}`;
    const response = await fetch(url);

    const data = await response.json();
    return data;
  }

  // Získání médií uživatele (nepoužívá se v aktuálním kódu, ale může být užitečné pro rozšíření)
  public async getUserMedia(): Promise<any> {
    const url = `${this.apiUrl}/${this.userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${this.accessToken}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
