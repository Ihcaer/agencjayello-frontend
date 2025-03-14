import { TestBed } from '@angular/core/testing';

import { ContactFormService } from './contact-form.service';
import { HttpClient } from '@angular/common/http';
import { ContactFormData } from 'app/main/store/models/contact-form.model';
import { of } from 'rxjs';

describe('ContactFormService', () => {
  let service: ContactFormService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({
      providers: [
        ContactFormService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(ContactFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send form data and return success', (done: DoneFn) => {
    const mockContactData: ContactFormData = { name: "John", email: "example@mail.com", message: "Test message" };

    const expectedResponse = { success: true };

    httpClientSpy.post.and.returnValue(of(expectedResponse));
    service.sendFormData(mockContactData).subscribe({
      next: response => {
        expect(response).toEqual(expectedResponse);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.post).toHaveBeenCalledWith(service.apiUrl + service.sendFormUrl, mockContactData);
  });
});
