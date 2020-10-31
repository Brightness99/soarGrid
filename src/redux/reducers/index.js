import { combineReducers } from 'redux';

import auth from './authReducer';
import posts from './postsReducer';
import comments from './commentsReducer';

const rootReducer = combineReducers({
  auth,
  posts,
  comments,
});

export default rootReducer;
