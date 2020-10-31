import Axios from '../../utils/axios';
import { commentsConstants } from '../constants';

export const getComments = postId => async dispatch => {
  try {
    dispatch({
      type: commentsConstants.GET_COMMENTS_START,
    });
    const { data } = await Axios.get(`/posts/${postId}/comments`);
    dispatch({
      type: commentsConstants.GET_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: commentsConstants.GET_COMMENTS_FAILURE,
      payload: error,
    });
    throw new Error(error);
  }
};

export const getCommentsReset = () => dispatch => {
  dispatch({
    type: commentsConstants.GET_COMMENTS_RESET,
  });
};

export const deleteComment = commentId => async dispatch => {
  
  try {
    dispatch({
      type: commentsConstants.DELETE_COMMENT_START,
    });
    const { status } = await Axios.delete(`/comments/${commentId}`);
    if (status === 200) {
      dispatch({
        type: commentsConstants.DELETE_COMMENT_SUCCESS,
        payload: true,
      });
    } else {
      dispatch({
        type: commentsConstants.DELETE_COMMENT_FAILURE,
        payload: 'Delete Failed',
      });
    }
  } catch (error) {
    dispatch({
      type: commentsConstants.DELETE_COMMENT_FAILURE,
      payload: error,
    });
    throw new Error(error);
  }
};

export const deleteCommentReset = () => dispatch => {
  dispatch({
    type: commentsConstants.DELETE_COMMENT_RESET,
  });
};
