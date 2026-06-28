import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../models/plan';
import { HttpClient } from '@angular/common/http';
import { ResponseShape } from '../models/response';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  http = inject(HttpClient);
  constructor() { }

  createPlan(query: string): Observable<ResponseShape<Plan>> {
    return this.http.post<ResponseShape<Plan>>(environment.apiUrl, { query })
  }
}
