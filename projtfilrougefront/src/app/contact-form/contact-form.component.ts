import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatError, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {RouterLink} from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatError,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink
  ],
})
export class ContactFormComponent {
  contactMessage = {
    email: '',
    subject: '',
    message: ''
  };

  constructor(private contactService: ContactService,private snackBar: MatSnackBar) {}

  onSubmit() {
    this.snackBar.open('Message envoyé avec succès', 'Fermer', {
      duration: 6000,
    });
    this.contactService.sendContactMessage(this.contactMessage).subscribe(response => {
      console.log('Message sent successfully', response);
      // Ajoutez ici une notification de succès ou réinitialisez le formulaire
    }, error => {
      console.error('Error sending message', error);
      // Ajoutez ici une notification d'erreur
    });
  }
}

