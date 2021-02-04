import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpClient: HttpClient) { }

  getPostByID(): Observable<Posts> {
    const url = 'https://bio.torre.co/api/bios/marceloeguino';
    return this.httpClient.get<Posts>(url);
  }

  postPeople({ offset, size, aggregate }): Promise<any> {
    const bodyRequest = { offset, size, aggregate };
    const url = 'https://search.torre.co/people/_search';

    return this.httpClient.post<any>(url, bodyRequest).toPromise();
  }
}