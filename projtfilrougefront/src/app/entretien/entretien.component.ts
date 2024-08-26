import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-entretien',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.scss']
})
export class EntretienComponent implements OnInit {
  formBuilder: FormBuilder = inject(FormBuilder);
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);

  formulaire: FormGroup = this.formBuilder.group({
    plaqueVoiture: ['', [Validators.required]],
  });

  listeMarqueVoiture: any[] = [];
  listeModeleVoiture: any[] = [];
  listeModeleFiltre: any[] = [];

  selectedMarque: any = null;
  selectedModele: any = null;

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:8080/marquevoiture')
      .subscribe((listeMarqueVoiture) => (this.listeMarqueVoiture = listeMarqueVoiture));
    this.http
      .get<any[]>('http://localhost:8080/modelevoiture')
      .subscribe((listeModeleVoiture) => (this.listeModeleVoiture = listeModeleVoiture));
  }

  onSelectionMarque() {
    this.listeModeleFiltre = this.listeModeleVoiture.filter(model => model.marqueVoiture.nomMarque === this.selectedMarque.nomMarque);
  }

  onSubmit() {
    if (this.formulaire.valid) {
      const voiture = this.formulaire.value;
      voiture.idModeleVoiture = this.selectedModele;
      this.http
        .post('http://localhost:8080/voiture', voiture)
        .subscribe((resultat) => console.log(resultat));
      this.router.navigateByUrl('/accueil');
    }
  }
}
