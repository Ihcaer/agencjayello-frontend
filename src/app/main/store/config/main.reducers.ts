import { ActionReducerMap } from "@ngrx/store";
import { contactFormReducer, ContactFormState } from "../contact-form/contact-form.reducer"

interface MainState {
   contactForm: ContactFormState;
}

export const mainReducers: ActionReducerMap<MainState> = {
   contactForm: contactFormReducer
};