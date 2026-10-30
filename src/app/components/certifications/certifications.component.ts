import { Component } from '@angular/core';

interface Certificate {
  title: string;
  issuer: string;
  type: string;
  link: string | null;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  template: `
    <section class="section" id="certifications" aria-labelledby="cert-title">
      <div class="container">
        <div class="heading-row">
          <div>
            <p class="section-kicker">05 / Learning</p>
            <h2 id="cert-title">Certificates &<br><span>coursework.</span></h2>
          </div>
          <p class="heading-note">Links can be added later when the public certificate pages are ready.</p>
        </div>

        <div class="cert-list">
          @for (certificate of certificates; track certificate.title) {
            <article class="cert">
              <span class="index">{{ ($index + 1).toString().padStart(2, '0') }}</span>
              <div class="cert-main">
                <h3>{{ certificate.title }}</h3>
                <p>{{ certificate.issuer }} · {{ certificate.type }}</p>
              </div>
              @if (certificate.link) {
                <a [href]="certificate.link" target="_blank" rel="noopener noreferrer">View ↗</a>
              } @else {
                <span class="pending">Link to add</span>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
  imports: [],
  styles: [`
    .heading-row { display:flex; justify-content:space-between; align-items:end; gap:30px; margin-bottom:50px; }
    h2 { font-size:clamp(2.8rem,5vw,5rem); line-height:.95; letter-spacing:-.065em; margin:0; }
    h2 span { color:var(--muted); }
    .heading-note { max-width:330px; color:var(--muted); line-height:1.7; font-size:.88rem; margin:0; }
    .cert-list { border-top:1px solid var(--border); }
    .cert { display:grid; grid-template-columns:55px 1fr auto; align-items:center; gap:20px; padding:22px 0; border-bottom:1px solid var(--border); }
    .index { color:#626875; font: .7rem ui-monospace,monospace; }
    h3 { margin:0 0 5px; font-size:1rem; }
    .cert p { margin:0; color:var(--muted); font-size:.78rem; }
    .cert a { color:var(--text); text-decoration:none; font-size:.74rem; font-weight:700; }
    .pending { color:#555b68; font-size:.7rem; }
    @media (max-width: 620px) {
      .heading-row { display:block; }
      .heading-note { margin-top:20px; }
      .cert { grid-template-columns:35px 1fr; }
      .cert a, .pending { grid-column:2; }
    }
  `],
})
export class CertificationsComponent {
  readonly certificates: Certificate[] = [
    { title: 'AI For Everyone', issuer: 'Coursera', type: 'Course / certificate', link: null },
    { title: 'Python for Data Science, AI & Development', issuer: 'IBM', type: 'Course / certificate', link: null },
    { title: 'IT Step Academy Diploma / Certificate', issuer: 'IT Step Academy', type: 'Education', link: null },
  ];
}
