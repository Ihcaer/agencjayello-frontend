import { inject, Injectable } from "@angular/core";
import { ContactFormService } from "@main/services/contact-form/contact-form.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { sendDataActions } from "./contact-form.actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { ToastService } from "app/shared/services/toast/toast.service";

@Injectable()
export class ContactFormEffects {
   private actions$ = inject(Actions);
   private contactFormService = inject(ContactFormService);
   private toastService = inject(ToastService);

   sendData$ = createEffect(() =>
      this.actions$.pipe(
         ofType(sendDataActions.sendData),
         mergeMap(action =>
            this.contactFormService.sendFormData(action.payload).pipe(
               tap(response => this.toastService.show("Wiadomość została wysłana pomyślnie", "success")),
               map(response => sendDataActions.sendDataSuccess({ response })),
               catchError(error => {
                  this.toastService.show("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później", "error");
                  return of(sendDataActions.sendDataFailure({ error }))
               })
            )
         )
      )
   );
}