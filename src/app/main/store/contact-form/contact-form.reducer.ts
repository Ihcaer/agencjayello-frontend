import { createReducer, on } from "@ngrx/store";
import { ContactFormData } from "../models/contact-form.model";
import { saveFormData, sendDataActions } from "./contact-form.actions";

export interface ContactFormState {
   formData: ContactFormData;
   sendData: { error: any, response: any }
}

export const inititalState: ContactFormState = {
   formData: { name: '', email: '', message: '' },
   sendData: { error: null, response: null }
};

export const contactFormReducer = createReducer(inititalState,
   // Save data
   on(saveFormData, (state, { formData }) => ({ ...state, formData: { ...formData } })),
   // Send data
   on(sendDataActions.sendData, state => ({ ...state, error: null })),
   on(sendDataActions.sendDataSuccess, (state, { response }) => ({ ...state, response })),
   on(sendDataActions.sendDataFailure, (state, { error }) => ({ ...state, error }))
);