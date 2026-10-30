import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="section" id="about" aria-labelledby="about-title">
      <div class="container about-grid">
        <div>
          <p class="section-kicker">01 / About</p>
          <h2 id="about-title">Learning by<br><span>building.</span></h2>
        </div>
        <div class="about-copy">
          <p>
            I'm Gurami, a Computer Science & Artificial Intelligence student at Business and Technology University in Tbilisi.
            My main direction is AI and Machine Learning, and I like learning by turning concepts into working projects.
          </p>
          <p>
            Python is at the center of what I'm currently developing — from data analysis and machine learning to automation and
            experimenting with AI agents. My earlier software-development, Linux and networking experience gives me a broader
            technical base to build on.
          </p>
          <p>
            I'm still early in my professional journey, so this portfolio is less about claiming experience and more about showing
            what I have actually built and what I'm learning next.
          </p>
          <div class="facts">
            <div><strong>3.5</strong><span>GPA</span></div>
            <div><strong>BTU</strong><span>Computer Science & AI</span></div>
            <div><strong>GE / EN / DE</strong><span>Languages</span></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: .72fr 1.28fr;
      gap: 100px;
      align-items: start;
    }
    h2 { font-size: clamp(2.8rem, 5vw, 5rem); line-height: .95; letter-spacing: -.065em; margin: 0; }
    h2 span { color: var(--muted); }
    .section-kicker { margin-bottom: 20px; }
    .about-copy { color: var(--muted); line-height: 1.85; font-size: 1rem; max-width: 680px; }
    .about-copy p { margin: 0 0 20px; }
    .about-copy p:first-child { color: var(--text); font-size: 1.08rem; }
    .facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 35px; }
    .facts div { border-top: 1px solid var(--border); padding-top: 14px; }
    .facts strong { display: block; color: var(--text); font-size: 1.1rem; }
    .facts span { color: #666c79; font-size: .72rem; margin-top: 5px; display: block; }
    @media (max-width: 800px) {
      .about-grid { grid-template-columns: 1fr; gap: 35px; }
    }
    @media (max-width: 520px) {
      .facts { grid-template-columns: 1fr; }
    }
  `],
})
export class AboutComponent {}
