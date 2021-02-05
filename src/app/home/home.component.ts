import { Component, OnInit } from '@angular/core';
import { FreeapiService } from '../freeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobsRetrieved: any[];
  opportunitiesRetrieved: any[];
  postById: any;

  searchText;

  /* 
    Implements de freeapiService developed for HttpClient requests
  */

  constructor(private freeapiService: FreeapiService) { }

  /* 
    ngOnInit()     
    By Default calls de OnClickPost function to get the Data from Torre Server 
  */

  ngOnInit() {

    this.onClickPost();
  }

  /* 
    onPostById(text: string)     
    Gets the information of a Person sending a string variable (username) to the funtion getPostByID. The funtion returns the data
    of the person in Json format 
  */

  onPostById(text: string) {
    this.freeapiService.getPostByID(text)
      .subscribe(data => {
        this.postById = data;
      });
  }

  /* 
    onOpportunitieById(text: string)     
    Gets the information of a specific Job Opportunitie sending a string variable (Id of the opportunitie) to the funtion getOpportunitieByID. The funtion returns 
    the data of the person in Json format 
  */

  onOpportunitieById(text: string) {
    this.freeapiService.getOpportunitieByID(text)
      .subscribe(data => {
        this.postById = data;
      })
  }

  /* 
    onclickPost()     
    Gets the information of the POST method available in Torre to get a search result of Persons. 
    By default when you send bad parameters, the method returns a array of 10 people. 
    This information is stored in the variable jobsRetrieved that is used in the Html to fill out the list.
  */

  onClickPost() {
    this.freeapiService.postPeople({
      offset: "1",
      size: 10,
      aggregator: "no"
    }).then(response => {
      this.jobsRetrieved = response["results"];
      console.log(this.jobsRetrieved);
    })
      .catch(error => console.log(error));
  }

  /* 
    onclickOpportunities()     
    Gets the information of the POST method available in Torre to get a search result of job Opportunities. 
    By default when you send bad parameters, the method returns a array of 10 job opportunities. 
    This information is stored in the variable opportunitiesRetrieved.
  */

  onClickOpportunities() {
    this.freeapiService.postOpportunities({
      offset: "A",
      size: 2,
      aggregate: "yes"
    }).then(response => {
      this.opportunitiesRetrieved = response["results"];
    })
      .catch(error => console.log(error));
  }

  /* 
    onclick()     
    Shows an Alert Message in the browser as a information method. This is to know that we are getting 
    the correct information about the person that we want to see the Genoma.
  */

  onClick(name: string, professionalHeadline: string) {
    alert("Se solicitan datos de " + name + " - " + professionalHeadline);
  }
}
