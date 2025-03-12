import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactData, contactData } from '@main/config/contact/contactData.config';
import { OfficeLocation, officeLocations } from '@main/config/contact/officeLocations.config';

interface ContactDataFormatted {
  icon: string;
  ref: string;
  value: string;
}

@Component({
  selector: 'app-contact-data',
  imports: [],
  templateUrl: './contact-data.component.html',
  styleUrl: './contact-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDataComponent {
  readonly contactData: ContactData = contactData;
  readonly formattedContactData: ContactDataFormatted[] = [
    { icon: "bi bi-telephone", ref: "tel:" + contactData.phoneNumber, value: contactData.phoneNumber },
    { icon: "bi bi-envelope-at", ref: "mailto:" + contactData.email, value: contactData.email }
  ];
  readonly officeLocations: OfficeLocation[] = officeLocations;
}
