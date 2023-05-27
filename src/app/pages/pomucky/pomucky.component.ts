import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PomuckyService } from 'src/app/service';
import { PopisPomucek } from 'src/app/types';

@Component({
  selector: 'app-pomucky',
  templateUrl: './pomucky.component.html',
  styleUrls: ['./pomucky.component.css']
})
export class PomuckyComponent implements OnInit {

  pomucka: any;
  kroky: Array<PopisPomucek>;

  constructor(private pomuckyService: PomuckyService, private router: Router) {
    const nazev = (this.router.url.split('/'))[2];
    this.pomucka = this.pomuckyService.getPomuckaByName(nazev);
    this.kroky = this.pomucka.kroky;
  }

  ngOnInit(): void {
    const nazev = (this.router.url.split('/'))[2];
    this.pomucka = this.pomuckyService.getPomuckaByName(nazev);
    this.kroky = this.pomucka.kroky;
  }

  ngDoCheck(): void {
    const nazev = (this.router.url.split('/'))[2];
    this.pomucka = this.pomuckyService.getPomuckaByName(nazev);
    this.kroky = this.pomucka.kroky;
  }
}
