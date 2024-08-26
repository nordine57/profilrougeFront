import { Component, inject, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router, RouterLink } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [RouterLink, MatIcon],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  http: HttpClient = inject(HttpClient);
  authentification = inject(AuthentificationService);
  router: Router = inject(Router);

  utilisateur: any = {}; // Utiliser un objet au lieu d'un tableau pour un seul utilisateur
  idUser: number = this.authentification.utilisateur.id;

  ngOnInit(): void {
    this.http
      .get<any>(`http://localhost:8080/utilisateur/${this.idUser}`)
      .subscribe((utilisateur) => (this.utilisateur = utilisateur));
  }
}

