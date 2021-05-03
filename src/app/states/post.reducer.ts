import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Post } from './../models/post.model';
import { FilterPost, PostLoadFailure, PostLoadSuccess } from './post.action';
import { PostState } from './post.state';


const initialState: PostState = {
  posts: [],
  idFilter: {
    id: 0
  },
  error: ''
};

// ######################################################## REDUCERS ########################################################

// on function is responsible for handling all the actions to be dispatched
export const postReducer = createReducer(
  initialState,
  on(PostLoadSuccess, (state, { posts }) => ({
    ...state,
    posts,
    error: ''
  })),
  on(PostLoadFailure, (state, { error }) => ({
    ...state,
    posts: [],
    error
  })),
  on(FilterPost, (state, props) => ({
    ...state,
    idFilter: { id: props.id }
  })),
);


// ######################################################## SELECTORS ########################################################

/**
 * if I want to just select the information available inside my post slice
 */
const getPostFeatureSelector = createFeatureSelector<PostState>('posts');

export const getPostList = createSelector(
  getPostFeatureSelector,
  state => {
    if (state.idFilter.id > 0) {
      return state.posts.filter(post => post.id == state.idFilter.id);
    }
    else {
      return state.posts;
    }
  }
);

export const getFilteredPostList = createSelector(
  getPostFeatureSelector,
  state => state.posts.filter(post => post.id >= state.idFilter.id)
);

export const getFilters = createSelector(
  getPostFeatureSelector,
  state => state.idFilter
);

