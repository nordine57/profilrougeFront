import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LabelComponent } from "../label/label.component";
import { Router, RouterLink } from "@angular/router";
import { AuthentificationService } from "../authentification.service";
import { CurrencyPipe, DatePipe } from "@angular/common";

@Component({
  selector: 'app-voiture-occasion',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, LabelComponent, RouterLink, CurrencyPipe, DatePipe],
  templateUrl: './voiture-occasion.component.html',
  styleUrls: ['./voiture-occasion.component.scss']
})
export class VoitureOccasionComponent implements OnInit {
  http: HttpClient = inject(HttpClient);
  router = inject(Router);

  listeVoitureOccasion: any[] = [];

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:8080/voitureoccasion/liste')
      .subscribe((listeVoitureOccasion) => (this.listeVoitureOccasion = listeVoitureOccasion));
  }

  onSupprimerVoiture(id: number): void {
    this.http
      .delete('http://localhost:8080/voitureoccasion/' + id)
      .subscribe((resultat) => console.log(resultat));
    this.ngOnInit();
    this.router.navigateByUrl('/voiture-occasion');
  }
}