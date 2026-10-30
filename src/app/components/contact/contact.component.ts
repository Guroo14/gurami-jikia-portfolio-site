import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="section contact-section" id="contact" aria-labelledby="contact-title">
      <div class="container contact-grid">
        <div>
          <p class="section-kicker">06 / Contact</p>
          <h2 id="contact-title">Have a project,<br><span>idea or question?</span></h2>
          <p class="intro">
            I'm open to connecting about junior opportunities, projects, learning and AI-related work.
          </p>

          <div class="contact-details">
            <a href="mailto:your.email&#64;example.com">your.email&#64;example.com</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">github.com/your-username ↗</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile ↗</a>
            <span>Tbilisi, Georgia</span>
          </div>
        </div>

        <form class="contact-form" [formGroup]="form" (ngSubmit)="submit()" novalidate>
          <label>
            <span>Name</span>
            <input type="text" formControlName="name" autocomplete="name" placeholder="Your name">
            @if (form.controls.name.touched && form.controls.name.invalid) {
              <small>Name is required and should be at least 2 characters.</small>
            }
          </label>

          <label>
            <span>Email</span>
            <input type="email" formControlName="email" autocomplete="email" placeholder="you@example.com">
            @if (form.controls.email.touched && form.controls.email.invalid) {
              <small>Please enter a valid email address.</small>
            }
          </label>

          <label>
            <span>Message</span>
            <textarea rows="7" formControlName="message" placeholder="Write your message..."></textarea>
            @if (form.controls.message.touched && form.controls.message.invalid) {
              <small>Message should be between 10 and 2000 characters.</small>
            }
          </label>

          <button class="send-button" type="submit" [disabled]="sending()">
            {{ sending() ? 'Sending…' : 'Send message ↗' }}
          </button>

          @if (feedback()) {
            <p class="feedback" [class.error]="hasError()">{{ feedback() }}</p>
          }
        </form>
      </div>
    </section>
  `,
  styles: [`
    .contact-section { background:linear-gradient(180deg, rgba(139,124,255,.045), transparent 55%); }
    .contact-grid { display:grid; grid-template-columns:.9fr 1.1fr; gap:100px; }
    h2 { font-size:clamp(2.8rem,5vw,5rem); line-height:.95; letter-spacing:-.065em; margin:0 0 22px; }
    h2 span { color:var(--muted); }
    .intro { max-width:440px; color:var(--muted); line-height:1.75; font-size:.9rem; }
    .contact-details { display:flex; flex-direction:column; gap:10px; margin-top:35px; }
    .contact-details a, .contact-details span { color:#8c92a0; text-decoration:none; font-size:.8rem; }
    .contact-details a:hover { color:var(--text); }
    .contact-form { padding:26px; border:1px solid var(--border); border-radius:16px; background:rgba(255,255,255,.018); }
    label { display:block; margin-bottom:18px; }
    label > span { display:block; color:#9da2ae; font-size:.72rem; font-weight:700; margin-bottom:8px; }
    input, textarea { width:100%; box-sizing:border-box; border:1px solid var(--border); border-radius:9px; background:#0d1016; color:var(--text); padding:12px 13px; font:inherit; outline:none; transition:border-color .2s ease; }
    textarea { resize:vertical; min-height:140px; }
    input:focus, textarea:focus { border-color:#6e657f; box-shadow:0 0 0 3px rgba(139,124,255,.08); }
    small { display:block; margin-top:6px; color:#d49b9b; font-size:.67rem; }
    .send-button { width:100%; border:0; border-radius:9px; min-height:46px; background:var(--text); color:var(--bg); font-weight:800; cursor:pointer; }
    .send-button:disabled { opacity:.55; cursor:not-allowed; }
    .feedback { color:#9ee6c3; font-size:.75rem; line-height:1.5; margin:13px 0 0; }
    .feedback.error { color:#d49b9b; }
    @media (max-width: 800px) {
      .contact-grid { grid-template-columns:1fr; gap:45px; }
    }
  `],
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(ApiService);

  readonly sending = signal(false);
  readonly feedback = signal('');
  readonly hasError = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
  });

  submit(): void {
    this.feedback.set('');
    this.hasError.set(false);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);

    this.api.sendContact(this.form.getRawValue()).subscribe({
      next: (response) => {
        this.feedback.set(response.message);
        this.form.reset();
        this.sending.set(false);
      },
      error: (error) => {
        this.feedback.set(
          error?.error?.detail ?? 'Something went wrong. Please try again later.',
        );
        this.hasError.set(true);
        this.sending.set(false);
      },
    });
  }
}
