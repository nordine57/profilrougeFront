import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthentificationService } from "../authentification.service";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { MatButton } from "@angular/material/button";
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-planning-resa',
  standalone: true,
    imports: [MatButton, RouterLink, RouterLinkActive, NgIf, NgForOf],
  templateUrl: './planning-resa.component.html',
  styleUrls: ['./planning-resa.component.scss']
})
export class PlanningResaComponent implements OnInit {

  http: HttpClient = inject(HttpClient);
  authentification = inject(AuthentificationService);
  router = inject(Router);

  listeResa: any[] = [];

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.http.get<any[]>('http://localhost:8080/reservation/liste')
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la récupération des réservations', error);
          return of([]);
        })
      )
      .subscribe((listeResa) => {
        this.listeResa = listeResa;
        console.log(this.listeResa);
      });
  }

  trackById(index: number, reservation: any): number {
    return reservation.idReservation;
  }

  onPrendreResa(reservation: any): void {
    this.http.put(
      `http://localhost:8080/reservation/${reservation.idReservation}`,
      reservation  // Envoyer l'objet de réservation complet comme corps de la requête PUT
    )
      .subscribe(
        response => {
          console.log('Réservation mise à jour avec succès', response);
          // Actualiser la liste des réservations
          this.getReservations();
        },
        error => {
          console.error('Erreur lors de la mise à jour de la réservation', error);
        }
      );
  }

}
