import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer-inner">
        <p>© {{ year }} Gurami Jikia</p>
        <p>Built with Angular · FastAPI · Python</p>
        <a href="#home" aria-label="Back to top">Back to top ↑</a>
      </div>
    </footer>
  `,
  styles: [`
    .footer { border-top:1px solid var(--border); }
    .footer-inner { min-height:85px; display:flex; align-items:center; justify-content:space-between; gap:15px; color:#626875; font-size:.68rem; }
    .footer p { margin:0; }
    .footer a { color:#8c92a0; text-decoration:none; }
    @media (max-width: 600px) { .footer-inner { flex-direction:column; justify-content:center; padding:22px 0; } }
  `],
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}
