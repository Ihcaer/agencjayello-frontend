import { Component, inject } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'app/shared/services/toast/toast.service';

@Component({
  selector: 'app-toast',
  imports: [NgbToastModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  protected toastService = inject(ToastService);

  protected toastStyles(type: string): string {
    let toastClass: string;

    switch (type) {
      case "success": {
        toastClass = "bg-success";
        break;
      }
      case "error": {
        toastClass = "bg-danger";
        break;
      }
      default: {
        toastClass = "";
        break;
      }
    }

    return toastClass;
  }
}
