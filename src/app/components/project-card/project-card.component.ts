import { Component, input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <article class="project-card" [class.featured]="project().featured">
      <div class="visual" [attr.data-type]="project().image">
        <span class="visual-label">{{ project().category }}</span>
        <div class="visual-code">
          @switch (project().image) {
            @case ('ml') {
              <span>data</span><i>→</i><span>model</span><i>→</i><b>result</b>
            }
            @case ('pycasino') {
              <span>PyQt5</span><i>+</i><span>SQLite</span>
            }
            @case ('shopsite') {
              <span>SHOP</span><b>SITE</b>
            }
            @default {
              <b>PROJECT</b>
            }
          }
        </div>
      </div>

      <div class="content">
        <div class="title-row">
          <div>
            <p class="number">{{ indexLabel() }}</p>
            <h3>{{ project().title }}</h3>
          </div>
          @if (project().status) {
            <span class="status">{{ project().status }}</span>
          }
        </div>
        <p class="description">{{ project().description }}</p>

        @if (project().technologies.length) {
          <div class="tags">
            @for (tech of project().technologies; track tech) {
              <span>{{ tech }}</span>
            }
          </div>
        }

        <div class="links">
          @if (project().githubUrl) {
            <a [href]="project().githubUrl" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          } @else {
            <span class="disabled-link">GitHub — add later</span>
          }
          @if (project().liveDemoUrl) {
            <a [href]="project().liveDemoUrl" target="_blank" rel="noopener noreferrer">Live demo ↗</a>
          }
        </div>
      </div>
    </article>
  `,
  styles: [`
    .project-card { border: 1px solid var(--border); border-radius: 16px; overflow: hidden; background: var(--surface); transition: transform .25s ease, border-color .25s ease; }
    .project-card:hover { transform: translateY(-5px); border-color: var(--border-strong); }
    .project-card.featured { grid-column: span 1; }
    .visual { height: 235px; position: relative; overflow: hidden; display: grid; place-items: center; background: #151822; }
    .visual::before, .visual::after { content:""; position:absolute; border:1px solid rgba(255,255,255,.07); border-radius:50%; }
    .visual::before { width:260px; height:260px; }
    .visual::after { width:160px; height:160px; }
    .visual[data-type="ml"] { background: radial-gradient(circle at 50% 50%, rgba(139,124,255,.18), transparent 50%), #151822; }
    .visual[data-type="pycasino"] { background: radial-gradient(circle at 50% 50%, rgba(158,230,195,.12), transparent 50%), #151822; }
    .visual[data-type="shopsite"] { background: linear-gradient(145deg, #151822, #11131a); }
    .visual-label { position:absolute; top:14px; left:14px; z-index:2; color:#737987; font-size:.65rem; letter-spacing:.1em; text-transform:uppercase; }
    .visual-code { position:relative; z-index:2; display:flex; align-items:center; gap:10px; font:600 .85rem ui-monospace,monospace; color:#8f95a4; }
    .visual-code i { color:#6c7180; font-style:normal; }
    .visual-code b { color:#e7e9ee; }
    .content { padding: 22px; }
    .title-row { display:flex; justify-content:space-between; gap:10px; }
    .number { margin:0 0 5px; color:#626875; font: .68rem ui-monospace,monospace; }
    h3 { margin:0; font-size:1.35rem; letter-spacing:-.03em; }
    .status { color:#777d8b; font-size:.66rem; border:1px solid var(--border); border-radius:999px; padding:5px 8px; height:max-content; }
    .description { color:var(--muted); line-height:1.7; font-size:.86rem; min-height:72px; margin:18px 0; }
    .tags { display:flex; flex-wrap:wrap; gap:6px; }
    .tags span { padding:6px 8px; border:1px solid var(--border); border-radius:6px; color:#8c92a0; font-size:.68rem; }
    .links { display:flex; gap:18px; margin-top:22px; padding-top:16px; border-top:1px solid var(--border); }
    .links a, .disabled-link { font-size:.74rem; font-weight:700; text-decoration:none; color:var(--text); }
    .disabled-link { color:#555b68; font-weight:500; }
    @media (max-width: 600px) {
      .visual { height: 190px; }
      .description { min-height: 0; }
    }
    @media (prefers-reduced-motion: reduce) { .project-card { transition: none; } }
  `],
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  readonly indexLabel = input.required<string>();
}
