import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseShape } from '../../models/response';
import { environment } from '../../../../environments/environment';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);

  register(userName: string, email: string, passWord: string): Observable<ResponseShape<User>> {
    return this.http.post<ResponseShape<User>>(`${environment.apiUrl}register`, { userName, email, passWord })
  }
}
