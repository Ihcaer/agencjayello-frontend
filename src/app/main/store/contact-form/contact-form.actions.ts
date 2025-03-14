import { createAction, createActionGroup, props } from "@ngrx/store";
import { ContactFormData } from "../models/contact-form.model";

export const saveFormData = createAction('[Contact Form] Save Form Data', props<{ formData: ContactFormData }>());

export const sendDataActions = createActionGroup({
   source: 'Contact Form',
   events: {
      'Send Data': props<{ payload: ContactFormData }>(),
      'Send Data Success': props<{ response: any }>(),
      'Send Data Failure': props<{ error: any }>()
   },
})