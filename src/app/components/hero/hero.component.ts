import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero section" id="home" aria-labelledby="hero-title">
      <div class="hero-grid container">
        <div class="hero-copy">
          <p class="eyebrow"><span class="dot"></span> Tbilisi, Georgia · Building & learning</p>
          <h1 id="hero-title">Gurami<br><span>Jikia</span></h1>
          <p class="role">Computer Science & AI Student</p>
          <p class="lead">
            I build practical projects with <strong>Python, Machine Learning and AI automation</strong>,
            while continuing to grow across software development and systems.
          </p>

          <div class="actions">
            <a class="button primary" href="#projects">View projects <span>↗</span></a>
            <a class="button secondary" href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a>
            <a class="text-link" href="#contact">Contact me</a>
          </div>

          <div class="quick-stack" aria-label="Main focus areas">
            <span>AI / ML</span>
            <span>Python</span>
            <span>Automation</span>
            <span>Data Science</span>
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="orb"></div>
          <div class="terminal">
            <div class="terminal-top"><span></span><span></span><span></span><small>guro.py</small></div>
            <div class="terminal-body">
              <p><i>class</i> <b>Developer</b>:</p>
              <p>&nbsp;&nbsp;<i>focus</i> = [</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<em>"AI"</em>, <em>"ML"</em>,</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<em>"Python"</em>, <em>"Automation"</em></p>
              <p>&nbsp;&nbsp;]</p>
              <p>&nbsp;</p>
              <p><i>while</i> learning:</p>
              <p>&nbsp;&nbsp;build(<em>"something useful"</em>)</p>
              <div class="cursor"></div>
            </div>
          </div>
          <div class="data-card card-a">01 <span>MODEL</span></div>
          <div class="data-card card-b">02 <span>DATA</span></div>
        </div>
      </div>
      <div class="scroll-hint container"><span></span> Scroll to explore</div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 780px;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding-top: 110px;
    }
    .hero::before {
      content: "";
      position: absolute;
      width: 560px;
      height: 560px;
      top: 80px;
      right: -180px;
      background: radial-gradient(circle, rgba(139,124,255,.14), transparent 66%);
      pointer-events: none;
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1.05fr .95fr;
      align-items: center;
      gap: 70px;
    }
    .eyebrow {
      color: var(--muted);
      font-size: .78rem;
      letter-spacing: .11em;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 9px;
      margin: 0 0 22px;
    }
    .dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: #9ee6c3;
      box-shadow: 0 0 0 5px rgba(158,230,195,.08);
    }
    h1 {
      font-size: clamp(4rem, 8vw, 7.6rem);
      line-height: .86;
      letter-spacing: -.075em;
      margin: 0;
    }
    h1 span { color: var(--muted); }
    .role {
      margin: 30px 0 12px;
      font-size: clamp(1.25rem, 2vw, 1.65rem);
      font-weight: 650;
      letter-spacing: -.025em;
    }
    .lead {
      max-width: 620px;
      color: var(--muted);
      line-height: 1.8;
      font-size: 1.02rem;
    }
    .lead strong { color: var(--text); font-weight: 600; }
    .actions {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 30px;
    }
    .button {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      min-height: 45px;
      padding: 0 16px;
      border-radius: 10px;
      text-decoration: none;
      font-size: .9rem;
      font-weight: 700;
      transition: transform .2s ease, border-color .2s ease, background .2s ease;
    }
    .button:hover { transform: translateY(-2px); }
    .primary { background: var(--text); color: var(--bg); }
    .secondary { border: 1px solid var(--border-strong); color: var(--text); background: var(--surface); }
    .text-link { color: var(--muted); text-decoration: none; padding: 10px; }
    .text-link:hover { color: var(--text); }
    .quick-stack {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 42px;
    }
    .quick-stack span {
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 7px 10px;
      color: var(--muted);
      font-size: .75rem;
      background: rgba(255,255,255,.025);
    }
    .hero-visual { min-height: 500px; position: relative; display: grid; place-items: center; }
    .orb {
      position: absolute;
      width: 390px;
      height: 390px;
      border-radius: 50%;
      border: 1px solid rgba(139,124,255,.18);
      box-shadow: 0 0 100px rgba(139,124,255,.08);
    }
    .orb::before, .orb::after {
      content: "";
      position: absolute;
      inset: 48px;
      border: 1px dashed rgba(255,255,255,.1);
      border-radius: 50%;
    }
    .orb::after { inset: 100px; border-style: solid; opacity: .45; }
    .terminal {
      position: relative;
      width: min(430px, 90%);
      border: 1px solid var(--border-strong);
      border-radius: 16px;
      background: rgba(16,19,27,.94);
      box-shadow: 0 28px 80px rgba(0,0,0,.35);
      overflow: hidden;
      z-index: 2;
      transform: rotate(-2deg);
    }
    .terminal-top {
      display: flex; align-items: center; gap: 5px;
      padding: 12px 14px;
      border-bottom: 1px solid var(--border);
    }
    .terminal-top > span { width: 7px; height: 7px; border-radius: 50%; background: #3a3d47; }
    .terminal-top small { margin-left: auto; color: var(--muted); font-size: .67rem; }
    .terminal-body {
      padding: 25px;
      font: 500 .88rem/1.75 ui-monospace, SFMono-Regular, Menlo, monospace;
      color: #aeb4c3;
    }
    .terminal-body i { color: #a88fff; font-style: normal; }
    .terminal-body b { color: #f1f3f8; }
    .terminal-body em { color: #9ee6c3; font-style: normal; }
    .cursor { display: inline-block; width: 7px; height: 15px; background: #c7cbd5; vertical-align: middle; animation: blink 1s steps(1) infinite; }
    .data-card {
      position: absolute; z-index: 3;
      border: 1px solid var(--border-strong);
      border-radius: 10px;
      padding: 10px 12px;
      background: rgba(14,16,22,.88);
      color: var(--text);
      font: 700 .67rem ui-monospace, monospace;
      letter-spacing: .05em;
    }
    .data-card span { color: var(--muted); margin-left: 8px; }
    .card-a { top: 90px; left: 2%; transform: rotate(-5deg); }
    .card-b { bottom: 85px; right: 3%; transform: rotate(4deg); }
    .scroll-hint {
      position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
      color: #666c79; font-size: .7rem; display: flex; align-items: center; gap: 9px;
    }
    .scroll-hint span { width: 24px; height: 1px; background: #444854; }
    @keyframes blink { 50% { opacity: 0; } }
    @media (max-width: 850px) {
      .hero { min-height: auto; padding-bottom: 100px; }
      .hero-grid { grid-template-columns: 1fr; gap: 35px; }
      .hero-visual { min-height: 400px; }
      .scroll-hint { display: none; }
    }
    @media (max-width: 520px) {
      .hero { padding-top: 120px; }
      .hero-visual { min-height: 330px; }
      .orb { width: 290px; height: 290px; }
      .terminal-body { padding: 18px; font-size: .75rem; }
      .data-card { display: none; }
    }
    @media (prefers-reduced-motion: reduce) {
      .cursor { animation: none; }
      .button { transition: none; }
    }
  `],
})
export class HeroComponent {}
