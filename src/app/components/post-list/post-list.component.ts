import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { JSONPlaceHolderService } from '../../services/jsonplace-holder.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList: Post[];

  constructor(private jsonPlaceHolderService: JSONPlaceHolderService) {
    this.postList = [];
   }

  ngOnInit(): void {
    this.jsonPlaceHolderService.getPosts().subscribe(
      result => {
        this.postList = result;
      }
    );
  }

}
