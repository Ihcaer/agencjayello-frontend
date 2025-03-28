import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactOverlayService {
  private openOverlaySubject = new Subject<void>();
  openOverlay$ = this.openOverlaySubject.asObservable();

  triggerOpenOverlay(): void {
    this.openOverlaySubject.next();
  }
}
