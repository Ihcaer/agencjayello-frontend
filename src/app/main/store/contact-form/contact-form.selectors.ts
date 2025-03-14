import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContactFormState } from "./contact-form.reducer";

export const selectContactForm = createFeatureSelector<ContactFormState>('contactForm');

export const selectFormData = createSelector(selectContactForm, (state: ContactFormState) => state.formData);