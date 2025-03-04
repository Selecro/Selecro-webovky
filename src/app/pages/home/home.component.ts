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
  errorMessage: string | null = null;

  constructor(private instagramService: InstagramService) { }

  ngOnInit(): void {
    // Opravený způsob získání dat z Instagram API
    this.instagramService.getLatestPost().pipe(
      catchError((error) => {
        // Ošetření chyby, pokud se nepodaří načíst příspěvek
        this.errorMessage = 'Nepodařilo se načíst příspěvek. Zkontrolujte připojení nebo token.';
        console.error(error);
        return of(null); // V případě chyby vrátí null místo chyby
      })
    ).subscribe((data: any) => {
      if (data && data.data && data.data.length > 0) {
        this.latestPost = data.data[0]; // Předpokládáme, že data jsou pole a první prvek je nejnovější příspěvek
      } else {
        this.errorMessage = 'Žádný příspěvek nebyl nalezen.';
      }
    });
  }
}
