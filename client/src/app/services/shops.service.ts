import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IShop } from '../models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  constructor(private readonly http: HttpClient) {}

  getShops(): Observable<IShop[]> {
    return this.http.get<IShop[]>(environment.baseUrl + '/shops')
  }
}
