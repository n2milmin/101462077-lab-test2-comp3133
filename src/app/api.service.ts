import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from './mission';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.url);
  }
}
