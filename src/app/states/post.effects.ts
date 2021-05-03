import { PostLoad, PostLoadSuccess, PostLoadFailure } from './post.action';
import { Post } from '../models/post.model';

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostsService } from './../services/posts/posts.service';



@Injectable()
export class PostEffect {
  constructor(private actions$: Actions, private postService: PostsService) { }

  getPosts$ = createEffect(() =>
    this.actions$.pipe(ofType(PostLoad),
      mergeMap(() => this.postService.getAllPosts().pipe(
        map((postList: Post[]) => PostLoadSuccess({ posts: postList })),
        catchError((err) => of(PostLoadFailure({ error: err })))
      )
      )
    )
  );
}
