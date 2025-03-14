import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
import { legalReferences } from '@main/config/references/legalReferences.config';
import { Store } from '@ngrx/store';
import { ContactFormData } from 'app/main/store/models/contact-form.model';
import { saveFormData, sendDataActions } from 'app/main/store/contact-form/contact-form.actions';
import { ContactFormState } from 'app/main/store/contact-form/contact-form.reducer';
import { selectFormData } from 'app/main/store/contact-form/contact-form.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private store = inject(Store<{ contactForm: ContactFormState }>);

  formGroupDirective = viewChild.required<FormGroupDirective>(FormGroupDirective);

  protected contactForm!: FormGroup;
  private subscription?: Subscription;

  protected emptyErrorMessage = signal("Pole nie może być puste");
  protected notEmailErrorMessage = signal("Adres e-mail jest nieprawidłowy");
  protected privacyPolicy = legalReferences['privacyPolicy'];

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      consent: [false, Validators.requiredTrue]
    });
    this.loadFormData();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  protected submitForm(): void {
    if (this.contactForm.valid) {
      this.sendForm();
      this.formGroupDirective().resetForm();
    }
  }

  saveFormData(): void {
    const data = this.contactForm.value;
    this.store.dispatch(saveFormData({ formData: data }));
  }

  private loadFormData(): void {
    this.subscription = this.store.select(selectFormData).subscribe((data: ContactFormData) => {
      this.contactForm.patchValue(data);
    })
  }

  private sendForm(): void {
    const data = this.contactForm.value;
    this.store.dispatch(sendDataActions.sendData({ payload: data }));
  }
}
