import { PostState } from './../../../states/post.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/services/posts/posts.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { getPostList } from 'src/app/states/post.reducer';
import { PostLoad } from 'src/app/states/post.action';
import { FilterPost } from './../../../states/post.action';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  users;
  posts;
  posts$: Observable<any>;

  columns: any[] = [
    { fieldName: 'userId', columnName: 'User ID' },
    { fieldName: 'id', columnName: 'Post ID' },
    { fieldName: 'title', columnName: 'Post Title' },
    { fieldName: 'body', columnName: 'Post Body' },
  ];

  constructor(private postsService: PostsService, private store: Store<PostState>) { }

  ngOnInit(): void {
    this.store.dispatch(PostLoad()); // should be the first action because it invokes another function in the effects file
    this.posts$ = this.store.select(getPostList);
  }

  // Drag Column event handler
  dropCol(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  /**
   * Search for Post
   * Receives the postID from the child component (search)
   * @param postId id of the post provided
   */
  searchUser(postId: number): void {
    this.store.dispatch(FilterPost({
      id: postId
    }));
  }
}
