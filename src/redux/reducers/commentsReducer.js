import { commentsConstants } from '../constants';
import initialState from './initialState';

const commentsReducer = (state = initialState.comments, action) => {
  switch (action.type) {
    case commentsConstants.GET_COMMENTS_START:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case commentsConstants.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case commentsConstants.GET_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case commentsConstants.GET_COMMENTS_RESET:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
      

    case commentsConstants.DELETE_COMMENT_START:
      return {
        ...state,
        deleteLoading: true,
        deleteData: null,
        deleteError: null,
      };
    case commentsConstants.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        deleteLoading: false,
        deleteData: action.payload,
        deleteError: null,
      };
    case commentsConstants.DELETE_COMMENT_FAILURE:
      return {
        ...state,
        deleteLoading: false,
        deleteData: null,
        deleteError: action.payload,
      };
    case commentsConstants.DELETE_COMMENT_RESET:
      return {
        ...state,
        deleteLoading: true,
        deleteData: null,
        deleteError: null,
      };
    default:
      return state;
  }
};

export default commentsReducer;
