import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { ContactFormData } from 'app/main/store/models/contact-form.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private http = inject(HttpClient);

  apiUrl: string = environment.apiUrl + '/contact-form';
  sendFormUrl: string = '/send';

  sendFormData(contactData: ContactFormData): Observable<any> {
    return this.http.post<any>(this.apiUrl + this.sendFormUrl, contactData);
  }
}
