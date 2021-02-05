import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
  API functions to get the data for the services available at Torre
*/

export class FreeapiService {


  constructor(private httpClient: HttpClient) { }

  /* 
    getPostById(Id: string)     
    Gets the information of a Person sending a string variable (username) to the GET method https://bio.torre.co/api/bios/${Id}.
    The funtion returns the data of the person in Json format 
  */

  getPostByID(Id:String): Observable<any> {
    const url = `https://bio.torre.co/api/bios/${Id}`;
    return this.httpClient.get<any>(url);
  }

  /* 
    getOpportunitieByID(Id: string)     
    Gets the information of a specific Job Opportunitie sending a string variable (Id of the opportunitie) to the GET method https://torre.co/api/opportunities/${Id}.
    The funtion returns the data of the person in Json format 
  */

  getOpportunitieByID(Id:String): Observable<any> {
    const url = `https://torre.co/api/opportunities/${Id}`;
    return this.httpClient.get<any>(url);
  }
  
  /* 
    postPeople()     
    Gets the information of the POST method available in Torre to get a search result of Persons in the POST method https://search.torre.co/people/_search. 
  */

  postPeople({ offset, size, aggregator }): Promise<any> {
    const bodyRequest = { offset, size, aggregator };
    const url = 'https://search.torre.co/people/_search';

    return this.httpClient.post<any>(url, bodyRequest).toPromise();
  }

  /* 
    postOpportunities()     
    Gets the information of the POST method available in Torre to get a search result of job Opportunities in the POST method https://search.torre.co/opportunities/_search. 
  */

  postOpportunities({ offset, size, aggregate }): Promise<any> {
    const bodyRequest = { offset, size, aggregate };
    const url = 'https://search.torre.co/opportunities/_search';

    return this.httpClient.post<any>(url, bodyRequest).toPromise();
  }
}