import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="nav-shell">
      <nav class="container nav" aria-label="Main navigation">
        <a class="brand" href="#home" aria-label="Gurami Jikia home">
          <span class="brand-mark">GJ</span>
          <span>gurami<span class="muted">.dev</span></span>
        </a>

        <button
          class="menu-button"
          type="button"
          aria-label="Toggle navigation"
          [attr.aria-expanded]="menuOpen()"
          (click)="menuOpen.set(!menuOpen())"
        >
          <span></span><span></span><span></span>
        </button>

        <div class="nav-links" [class.open]="menuOpen()">
          <a href="#about" (click)="close()">About</a>
          <a href="#skills" (click)="close()">Skills</a>
          <a href="#projects" (click)="close()">Projects</a>
          <a href="#journey" (click)="close()">Journey</a>
          <a href="#certifications" (click)="close()">Certificates</a>
          <a class="nav-contact" href="#contact" (click)="close()">Contact</a>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .nav-shell {
      position: fixed;
      inset: 0 0 auto;
      z-index: 50;
      border-bottom: 1px solid rgba(255,255,255,.06);
      background: rgba(11,13,18,.78);
      backdrop-filter: blur(16px);
    }
    .nav {
      min-height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--text);
      font-weight: 800;
      letter-spacing: -.03em;
      text-decoration: none;
    }
    .brand-mark {
      display: grid;
      place-items: center;
      width: 34px;
      height: 34px;
      border: 1px solid var(--border-strong);
      border-radius: 10px;
      background: var(--surface);
      color: var(--text);
      font-size: .72rem;
    }
    .muted { color: var(--muted); font-weight: 600; }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .nav-links a {
      color: var(--muted);
      font-size: .9rem;
      text-decoration: none;
      transition: color .2s ease;
    }
    .nav-links a:hover,
    .nav-links a:focus-visible { color: var(--text); }
    .nav-contact {
      padding: 9px 14px;
      border: 1px solid var(--border-strong);
      border-radius: 10px;
      color: var(--text) !important;
      background: rgba(255,255,255,.04);
    }
    .menu-button {
      display: none;
      border: 0;
      background: transparent;
      padding: 8px;
      cursor: pointer;
    }
    .menu-button span {
      display: block;
      width: 23px;
      height: 2px;
      margin: 4px;
      background: var(--text);
    }
    @media (max-width: 800px) {
      .menu-button { display: block; }
      .nav-links {
        position: absolute;
        top: 72px;
        left: 16px;
        right: 16px;
        display: none;
        padding: 14px;
        flex-direction: column;
        align-items: stretch;
        gap: 4px;
        border: 1px solid var(--border);
        border-radius: 14px;
        background: rgba(18,21,29,.97);
        box-shadow: var(--shadow);
      }
      .nav-links.open { display: flex; }
      .nav-links a { padding: 11px; }
    }
  `],
})
export class NavbarComponent {
  readonly menuOpen = signal(false);

  close(): void {
    this.menuOpen.set(false);
  }
}
