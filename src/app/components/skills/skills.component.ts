import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  number: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="section section-alt" id="skills" aria-labelledby="skills-title">
      <div class="container">
        <div class="heading-row">
          <div>
            <p class="section-kicker">02 / Skills</p>
            <h2 id="skills-title">Tools I use to<br><span>make things.</span></h2>
          </div>
          <p class="heading-note">No fake percentages. Just the technologies I'm actually learning and using.</p>
        </div>

        <div class="skill-grid">
          @for (group of groups; track group.title) {
            <article class="skill-group">
              <div class="group-top"><span>{{ group.number }}</span><h3>{{ group.title }}</h3></div>
              <div class="tags">
                @for (skill of group.skills; track skill) {
                  <span>{{ skill }}</span>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-alt { background: rgba(255,255,255,.018); border-block: 1px solid rgba(255,255,255,.04); }
    .heading-row { display: flex; justify-content: space-between; align-items: end; gap: 30px; margin-bottom: 55px; }
    h2 { font-size: clamp(2.8rem, 5vw, 5rem); line-height: .95; letter-spacing: -.065em; margin: 0; }
    h2 span { color: var(--muted); }
    .heading-note { max-width: 340px; color: var(--muted); line-height: 1.7; font-size: .88rem; margin: 0; }
    .skill-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
    .skill-group { min-height: 240px; padding: 24px; border: 1px solid var(--border); border-radius: 15px; background: rgba(255,255,255,.018); transition: border-color .2s ease, transform .2s ease; }
    .skill-group:hover { border-color: var(--border-strong); transform: translateY(-3px); }
    .group-top { display: flex; align-items: center; gap: 12px; margin-bottom: 35px; }
    .group-top span { color: #666c79; font: .7rem ui-monospace, monospace; }
    h3 { margin: 0; font-size: 1.05rem; }
    .tags { display: flex; flex-wrap: wrap; gap: 7px; }
    .tags span { border: 1px solid var(--border); border-radius: 7px; padding: 8px 9px; color: var(--muted); font-size: .75rem; background: rgba(0,0,0,.08); }
    @media (max-width: 850px) {
      .skill-grid { grid-template-columns: 1fr; }
      .skill-group { min-height: auto; }
    }
    @media (max-width: 620px) {
      .heading-row { display: block; }
      .heading-note { margin-top: 20px; }
    }
    @media (prefers-reduced-motion: reduce) { .skill-group { transition: none; } }
  `],
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = [
    {
      number: '01',
      title: 'AI & Data',
      skills: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Science', 'AI Automation', 'AI Agents', 'Prompt Engineering'],
    },
    {
      number: '02',
      title: 'Development',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS', 'Bootstrap', 'C#', 'SQL', 'Git / GitHub'],
    },
    {
      number: '03',
      title: 'Systems & Networking',
      skills: ['Linux', 'Bash', 'Cisco', 'CCNA', 'Networking', 'Oracle / PL-SQL', 'Unity'],
    },
  ];
}
