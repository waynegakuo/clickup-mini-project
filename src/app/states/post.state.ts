import { Post } from '../models/post.model';
import { IState } from './../state';

/**
 * Define an interface; what you want to save into your DB, for here, your store
 * Decide on the relevant info which you think should be available in your entire app
 */
export interface PostState extends IState{
  posts: Post[];
  idFilter: {
    id: number;
  };
  error: string;
}
