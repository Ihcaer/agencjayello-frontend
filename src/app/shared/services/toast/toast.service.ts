import { Injectable } from '@angular/core';

interface Toast {
  text: string;
  type: "standard" | "success" | "error";
  time: number
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];

  show(message?: string, type: "standard" | "success" | "error" = "standard", time: number = 5000): void {
    let text: string;

    if (!message && type === "standard") {
      text = "Ładowanie..."
    } else if (!message && type === "success") {
      text = "Operacja zakończona sukcesem.";
    } else if (!message && type === "error") {
      text = "Wystąpił błąd. Spróbój ponownie później.";
    } else if (message) {
      text = message;
    } else {
      text = "Komunikat";
    }

    this.toasts.push({ text, type, time });
  }

  remove(toast: Toast): void {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}