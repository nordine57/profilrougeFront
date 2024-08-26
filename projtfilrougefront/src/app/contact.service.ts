import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/utilisateur/contact'; // URL de votre API

  constructor(private http: HttpClient) {}

  sendContactMessage(contactMessage: {  email: string; subject: string; message: string }): Observable<any> {
    const params = new HttpParams()
      .set('email', contactMessage.email)
      .set('subject', contactMessage.subject)
      .set('message', contactMessage.message);

    return this.http.post(this.apiUrl, params);
  }
}
