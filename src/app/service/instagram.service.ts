import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private apiUrl = 'https://graph.facebook.com';
  private accessToken = 'ble';
  private userId = '1111';

  constructor(private http: HttpClient) { }

  // Získání posledního příspěvku a uživatelských informací současně
  getLatestPostWithUserInfo(): Observable<any> {
    const postUrl = `${this.apiUrl}/${this.userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${this.accessToken}`;
    const userUrl = `${this.apiUrl}/${this.userId}?fields=username,profile_picture_url&access_token=${this.accessToken}`;

    return forkJoin({
      post: this.http.get<any>(postUrl),
      user: this.http.get<any>(userUrl)
    }).pipe(
      map(({ post, user }) => ({
        latestPost: post.data ? post.data[0] : null, // Získáme nejnovější příspěvek
        username: user.username,
        profilePicture: user.profile_picture_url
      }))
    );
  }
}
