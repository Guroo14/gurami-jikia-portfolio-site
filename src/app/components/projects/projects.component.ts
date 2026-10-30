import { Component, computed, inject, signal } from '@angular/core';

import { PROJECTS } from '../../data/projects';
import { Project, ProjectCategory } from '../../models/project.model';
import { ApiService } from '../../services/api.service';
import { ProjectCardComponent } from '../project-card/project-card.component';

type Filter = 'All' | ProjectCategory;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <section class="section" id="projects" aria-labelledby="projects-title">
      <div class="container">
        <div class="heading-row">
          <div>
            <p class="section-kicker">03 / Selected work</p>
            <h2 id="projects-title">Projects that<br><span>got me curious.</span></h2>
          </div>
          <p class="heading-note">
            A small collection of practical work. The list is intentionally easy to extend as new projects are finished.
          </p>
        </div>

        <div class="filters" role="group" aria-label="Filter projects">
          @for (filter of filters; track filter) {
            <button
              type="button"
              [class.active]="selectedFilter() === filter"
              [attr.aria-pressed]="selectedFilter() === filter"
              (click)="selectedFilter.set(filter)"
            >
              {{ filter }}
            </button>
          }
        </div>

        <div class="project-grid">
          @for (project of filteredProjects(); track project.id; let i = $index) {
            <app-project-card
              [project]="project"
              [indexLabel]="formatIndex(i)"
            />
          }
        </div>

        <p class="api-note" [class.ok]="apiOnline()">
          <span></span>
          {{ apiOnline() ? 'Projects API connected' : 'Showing local project data' }}
        </p>
      </div>
    </section>
  `,
  styles: [`
    .heading-row { display:flex; justify-content:space-between; align-items:end; gap:30px; margin-bottom:35px; }
    h2 { font-size:clamp(2.8rem,5vw,5rem); line-height:.95; letter-spacing:-.065em; margin:0; }
    h2 span { color:var(--muted); }
    .heading-note { max-width:350px; color:var(--muted); line-height:1.7; font-size:.88rem; margin:0; }
    .filters { display:flex; gap:7px; flex-wrap:wrap; margin-bottom:20px; }
    .filters button { cursor:pointer; border:1px solid var(--border); border-radius:8px; padding:8px 11px; background:transparent; color:var(--muted); font:600 .73rem inherit; }
    .filters button:hover, .filters button.active { color:var(--text); border-color:var(--border-strong); background:rgba(255,255,255,.045); }
    .project-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
    .api-note { display:flex; align-items:center; gap:8px; color:#565c69; font-size:.68rem; margin-top:18px; }
    .api-note span { width:6px; height:6px; border-radius:50%; background:#565c69; }
    .api-note.ok span { background:#9ee6c3; }
    .api-note.ok { color:#777f8e; }
    @media (max-width: 900px) { .project-grid { grid-template-columns:1fr 1fr; } }
    @media (max-width: 650px) {
      .heading-row { display:block; }
      .heading-note { margin-top:20px; }
      .project-grid { grid-template-columns:1fr; }
    }
  `],
})
export class ProjectsComponent {
  private readonly api = inject(ApiService);

  readonly filters: Filter[] = ['All', 'AI / ML', 'Python', 'Web', 'Other'];
  readonly selectedFilter = signal<Filter>('All');
  readonly localProjects = signal<Project[]>(PROJECTS);
  readonly apiOnline = signal(false);

  readonly filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    return filter === 'All'
      ? this.localProjects()
      : this.localProjects().filter((project) => project.category === filter);
  });

  constructor() {
    this.api.getProjects().subscribe({
      next: (projects) => {
        if (projects?.length) {
          this.localProjects.set(projects);
          this.apiOnline.set(true);
        }
      },
      error: () => this.apiOnline.set(false),
    });
  }

  formatIndex(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
