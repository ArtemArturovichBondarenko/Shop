import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-discount-form',
  imports: [],
  templateUrl: './discount-form.component.html',
  styleUrl: './discount-form.component.scss',
})
export class DiscountFormComponent {
  discountForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.discountForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
}
