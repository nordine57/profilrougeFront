import { Component, inject, OnInit } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthentificationService } from "../authentification.service";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatButton
  ],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);
  authentification = inject(AuthentificationService);

  utilisateur: any = null; // Initialise utilisateur à null
  Idutilisateur: number = this.authentification.utilisateur.id;

  ngOnInit(): void {
    this.getUtilisateurInfo(this.Idutilisateur);
  }

  getUtilisateurInfo(id: number): void {
    // Ajoutez les en-têtes d'authentification si nécessaire
    const token = this.authentification.authentificationAvecJwtLocalStorage(); // Assurez-vous d'avoir une méthode pour récupérer le token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http
      .get<any>(`http://localhost:8080/utilisateur/${id}`, { headers })
      .subscribe(
        (utilisateur) => {
          this.utilisateur = utilisateur;
          console.log('Utilisateur :', this.utilisateur);
        },
        (error) => {
          console.error('Error fetching user information:', error);
        }
      );
  }

  onSupprimerResa(id: number): void {
    this.http
      .delete('http://localhost:8080/voiture/' + id)
      .subscribe((resultat) => console.log(resultat));
    this.ngOnInit();
    this.router.navigateByUrl('/reservation');
  }
}
