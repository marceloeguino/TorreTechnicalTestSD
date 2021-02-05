import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpClient: HttpClient) { }

  getPostByID(Id:String): Observable<Posts> {
    const url = `https://bio.torre.co/api/bios/${Id}`;
    return this.httpClient.get<Posts>(url);
  }

  getOpportunitieByID(): Observable<Posts> {
    const url = 'https://torre.co/api/opportunities/Yd678krp';
    return this.httpClient.get<Posts>(url);
  }
  postPeople({ offset, size, aggregator }): Promise<any> {
    const bodyRequest = { offset, size, aggregator };
    const url = 'https://search.torre.co/people/_search';

    return this.httpClient.post<any>(url, bodyRequest).toPromise();
  }

  postOpportunities({ offset, size, aggregate }): Promise<any> {
    const bodyRequest = { offset, size, aggregate };
    const url = 'https://search.torre.co/opportunities/_search';

    return this.httpClient.post<any>(url, bodyRequest).toPromise();
  }
}