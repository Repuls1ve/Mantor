import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IServiceCenter } from '../models/service-center.model';

@Injectable({
  providedIn: 'root'
})
export class CentersService {
  constructor(private readonly http: HttpClient) {}

  getCenters(): Observable<IServiceCenter[]> {
    return this.http.get<IServiceCenter[]>(environment.baseUrl + '/service-centers')
  }
}
