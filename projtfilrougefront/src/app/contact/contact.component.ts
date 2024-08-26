import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts = [
    {
      title: 'IT Technicien',
      name: 'Nordine',
      phone: '+48 123 456 789',
      email: 'test@gmail.com'
    },
    {
      title: 'Stagiaire',
      name: 'Karim',
      phone: '0675847546',
      email: 'test2@gmail.com'
    }
  ];
}
