import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageNonTrouveComponent } from './page-non-trouve/page-non-trouve.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { userGuard } from './user.guard';
import { adminGuard } from './admin.guard';
import { ProfilComponent } from './profil/profil.component';
import {VoitureOccasionComponent} from "./voiture-occasion/voiture-occasion.component";
import {EntretienComponent} from "./entretien/entretien.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {EditProfilComponent} from "./edit-profil/edit-profil.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ListeClientComponent} from "./liste-client/liste-client.component";
import {AjoutVoitureoccaComponent} from "./ajout-voitureocca/ajout-voitureocca.component";
import {AjoutReservationComponent} from "./ajout-reservation/ajout-reservation.component";
import {AjoutTacheComponent} from "./ajout-tache/ajout-tache.component";
import {AjoutBoxComponent} from "./ajout-box/ajout-box.component";
import {PlanningResaComponent} from "./planning-resa/planning-resa.component";
import {AjoutUtilisateurComponent} from "./ajout-utilisateur/ajout-utilisateur.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {VoitureOccasionAdminComponent} from "./voiture-occasion-admin/voiture-occasion-admin.component";


export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent,  },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'entretien', component: EntretienComponent },
  { path: 'voiture-occasion', component: VoitureOccasionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'reservation', component: ReservationComponent, canActivate: [userGuard] },
  { path: 'edit-profil', component: EditProfilComponent, canActivate: [userGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [adminGuard]  },
  { path: 'liste-client', component: ListeClientComponent },
  { path: 'ajout-voitureocca', component: AjoutVoitureoccaComponent,canActivate: [adminGuard] },
  { path: 'ajout-reservation', component: AjoutReservationComponent },
  { path: 'ajout-tache', component: AjoutTacheComponent,canActivate: [adminGuard] },
  { path: 'ajout-box', component: AjoutBoxComponent },
  { path: 'ajout-utilisateur', component: AjoutUtilisateurComponent,canActivate: [adminGuard] },
  { path: 'planning', component: PlanningResaComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'voiture-occasion-admin', component: VoitureOccasionAdminComponent,canActivate: [adminGuard] },
  {
    path: 'edit-produit',
    component: EditProduitComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'edit-produit/:id',
    component: EditProduitComponent,
    canActivate: [adminGuard],
  },
  { path: 'profil', component: ProfilComponent, canActivate: [userGuard] },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: PageNonTrouveComponent },
];
