import { Component, OnInit } from '@angular/core';
import { InstagramService } from 'src/app/service/instagram.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latestPost: any;
  username: string = '';
  profilePicture: string = '';

  constructor(private instagramService: InstagramService) {}

  ngOnInit(): void {
    this.instagramService.getLatestPostWithUserInfo().subscribe(data => {
      this.latestPost = data.latestPost;
      this.username = data.username;
      this.profilePicture = data.profilePicture;
    });
  }
}