import { createAction, props } from '@ngrx/store';
import { Post } from './../models/post.model';

export const PostLoad = createAction('[Post] Get Posts');

// once posts are loaded, I send the payload to the reducer using the props<{...}>()
export const PostLoadSuccess = createAction('[Post] Get Post Success', props<{ posts: Post[] }>());
export const PostLoadFailure = createAction('[Post] Get Post Failure', props<{ error: string }>());
export const FilterPost = createAction('[Post] Get Filtered Post', props<{ id: number }>());
