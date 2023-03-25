import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private router: Router, private token: TokenService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  signOut() {
    this.token.signOut();
    this.router.navigate(["home"]);
  }
}