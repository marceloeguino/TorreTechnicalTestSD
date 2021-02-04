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

  constructor(private freeapiService: FreeapiService) { }

  ngOnInit() {

    this.freeapiService.getPostByID()
      .subscribe(data => {
        this.postByID = data;
      })
  }

  onClickPost() {
    this.freeapiService.postPeople({
      offset: "A",
      size: 2,
      aggregate: "remoter"
    }).then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
