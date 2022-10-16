import { Component, OnInit } from '@angular/core';
import { VyukaService } from '../../service/vyuka.service';
import { Router } from '@angular/router';
import { Vyrobek } from 'src/app/types';

@Component({
  selector: 'app-vyukovymod',
  templateUrl: './vyukovymod.component.html',
  styleUrls: ['./vyukovymod.component.css']
})
export class VyukaComponent implements OnInit {

  vyrobek: Array<Vyrobek> = this.vyukaService.getvyrobek();

  constructor(private vyukaService: VyukaService, private router: Router) { }

  ngOnInit() {
    
  }

}
