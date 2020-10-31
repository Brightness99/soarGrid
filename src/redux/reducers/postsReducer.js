import { postsConstants } from '../constants';
import initialState from './initialState';

const postsReducer = (state = initialState.posts, action) => {
  switch (action.type) {
    case postsConstants.GET_POSTS_START:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case postsConstants.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case postsConstants.GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
