import { Component } from '@angular/core';
import { FreeapiService } from './freeapi.service';
import { Posts } from '../app/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Torre';

  allPosts: Posts[];
  postByID: Posts;
  postByUserID: Posts[];
  postedPost: Posts;
  jobsRetrieved: any[];

  searchText;

  constructor(private freeapiService: FreeapiService) { }

  ngOnInit() {

    this.onClickPost();
    /*  this.freeapiService.postPeople({
       offset: "A",
       size: 30,
       aggregator: "no"
     }).then(response => this.jobsRetrieved = response.json())
       .catch(error => console.log(error)); */


    /* this.freeapiService.getPostByID('torrenegra')
      .subscribe(data => {
        this.postByID = data;
      });

    this.freeapiService.getOpportunitieByID()
      .subscribe(data => {
        this.postByID = data;
      }) */
  }

  onClickPost() {
    this.freeapiService.postPeople({
      offset: "A",
      size: 30,
      aggregator: "no"
    }).then(response => {
      this.jobsRetrieved = response["results"];
    })
      .catch(error => console.log(error));
  }

  onClickOpportunities() {
    this.freeapiService.postOpportunities({
      offset: "A",
      size: 2,
      aggregate: "yes"
    }).then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
