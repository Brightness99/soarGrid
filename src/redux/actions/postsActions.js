import Axios from '../../utils/axios';
import { postsConstants } from '../constants';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: postsConstants.GET_POSTS_START,
    });
    const { data } = await Axios.get('/posts');
    dispatch({
      type: postsConstants.GET_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: postsConstants.GET_POSTS_FAILURE,
      payload: error,
    });
    throw new Error(error);
  }
};
