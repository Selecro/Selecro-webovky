import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavodyService } from '../../../service/navody.service';
import { Navod, Popis } from '../../../types';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navody-detail',
  templateUrl: './navody-detail.component.html',
  styleUrls: ['./navody-detail.component.css']
})
export class NavodyDetailComponent implements OnInit {

  title: any;
  popis: Array<Popis>;
  navod: any;
  index: number;
  intervalId: any;
  timer: any = 0;
  element: NodeListOf<HTMLElement> | null;

  constructor(private navodyService: NavodyService, private router: Router, public translate: TranslateService) {
    this.title = localStorage.getItem("title");
    this.popis = new Array<Popis>;
    this.navod = new Array<Navod>;
    this.index = 0;
    this.element = document.getElementsByName("button0");
    translate.addLangs(['cs','en']);
    translate.setDefaultLang('cs');
  }
  
  switchLanguage(lang:string){
    this.translate.use(lang);
  }

  ngOnInit() {
    this.navod = this.navodyService.getNavodyByName(this.title);
    this.popis = this.navodyService.getPopisy(this.title);
    this.element = document.getElementsByName("button0");
  }

  public setindex(item: Popis) {
    this.index = this.popis.indexOf(item);
  }

  get minutes() {
    return Math.floor(this.timer / 60) % 60;
  }

  get seconds() {
    return ("00" + this.timer % 60).slice(-2);
  }

  public time() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }
    else if (!this.intervalId) {
      this.intervalId = setInterval(() => this.timer++, 1000);
    }
  }

  public finished() {
    if (this.element?.item(this.index).className === "finished") {
      this.element?.item(this.index).classList.remove("finished");
      this.element?.item(this.index).classList.add("unfinished");
    }
    else {
      this.element?.item(this.index).classList.remove("unfinished");
      this.element?.item(this.index).classList.add("finished");
    }
  }

  public previousIndex() {

  }

  public nextIndex() {

  }

}