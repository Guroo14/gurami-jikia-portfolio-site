import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ContactPayload, ContactResponse } from '../models/contact.model';
import { Project } from '../models/project.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly apiBaseUrl = environment.apiUrl;

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiBaseUrl}/projects`);
  }

  sendContact(payload: ContactPayload): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(
      `${this.apiBaseUrl}/contact`,
      payload,
    );
  }

  getHealth(): Observable<{ status: string }> {
    return this.http.get<{ status: string }>(`${this.apiBaseUrl}/health`);
  }
}
