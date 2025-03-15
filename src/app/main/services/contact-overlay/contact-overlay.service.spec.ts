import { TestBed } from '@angular/core/testing';

import { ContactOverlayService } from './contact-overlay.service';

describe('ContactOverlayService', () => {
  let service: ContactOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
