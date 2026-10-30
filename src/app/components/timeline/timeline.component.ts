import { Component } from '@angular/core';

interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  template: `
    <section class="section section-alt" id="journey" aria-labelledby="journey-title">
      <div class="container journey-grid">
        <div class="sticky-heading">
          <p class="section-kicker">04 / Background</p>
          <h2 id="journey-title">A work in<br><span>progress.</span></h2>
          <p>My path so far is a mix of structured study, technical foundations and learning through personal projects.</p>
        </div>

        <div class="timeline">
          @for (item of items; track item.title) {
            <article class="item">
              <div class="marker" aria-hidden="true"></div>
              <div class="meta">{{ item.year }}</div>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .journey-grid { display:grid; grid-template-columns:.8fr 1.2fr; gap:100px; }
    .sticky-heading { position:sticky; top:110px; align-self:start; }
    h2 { font-size:clamp(2.8rem,5vw,5rem); line-height:.95; letter-spacing:-.065em; margin:0 0 20px; }
    h2 span { color:var(--muted); }
    .sticky-heading > p:last-child { max-width:340px; color:var(--muted); line-height:1.7; font-size:.88rem; }
    .timeline { border-left:1px solid var(--border); padding-left:35px; }
    .item { position:relative; display:grid; grid-template-columns:90px 1fr; gap:30px; padding:0 0 55px; }
    .item:last-child { padding-bottom:0; }
    .marker { position:absolute; left:-39px; top:4px; width:7px; height:7px; border:1px solid #737987; border-radius:50%; background:var(--bg); }
    .meta { color:#6b7180; font:700 .68rem ui-monospace,monospace; padding-top:2px; }
    h3 { margin:0 0 10px; font-size:1.1rem; }
    .item p { margin:0; color:var(--muted); line-height:1.75; font-size:.88rem; max-width:560px; }
    @media (max-width: 800px) {
      .journey-grid { grid-template-columns:1fr; gap:45px; }
      .sticky-heading { position:static; }
    }
    @media (max-width: 540px) {
      .item { grid-template-columns:1fr; gap:8px; }
    }
  `],
})
export class TimelineComponent {
  readonly items: JourneyItem[] = [
    {
      year: 'NOW',
      title: 'Business and Technology University',
      description: 'Computer Science & Artificial Intelligence student, currently building toward an AI/ML-focused career.',
    },
    {
      year: 'EARLIER',
      title: 'IT Step Academy',
      description: 'Studied IT, software development and related technologies, completing courses and receiving a diploma/certificate.',
    },
    {
      year: 'FOUNDATION',
      title: 'Networking / CCNA',
      description: 'Built a networking and systems foundation through networking study, Cisco and CCNA-related coursework.',
    },
    {
      year: 'BUILDING',
      title: 'Python, Data Science & ML',
      description: 'Developing practical skills through Python, Pandas, NumPy, Scikit-learn, data analysis and machine-learning projects.',
    },
    {
      year: 'ONGOING',
      title: 'Personal projects',
      description: 'Turning what I learn into projects such as ML work, PyCasino and web-development projects, with more to come.',
    },
  ];
}
