import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.scss']
})
export class AppointmentModalComponent implements OnInit {
  form: FormGroup;
  visible = false;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private service: AppointmentService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sessionType: ['', Validators.required],
      timePreference: ['', Validators.required],
      phone: [''],
      acceptsTerms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    document.addEventListener('openAppointmentModal', this.open.bind(this));
  }

  open(): void {
    this.visible = true;
    this.successMessage = '';
    this.errorMessage = '';
    this.form.reset();
  }

  close(): void {
    this.visible = false;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.service.submitAppointment(this.form.value).subscribe({
      next: res => {
        this.successMessage = res.message;
        this.loading = false;
      },
      error: err => {
        this.errorMessage = err.message || 'Submission error';
        this.loading = false;
      }
    });
  }
}
