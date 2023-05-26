import { GetDiscussionAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

function AsyncGetComments(id_post = null) {
  return async (dispatch) => {
    if (id_post === null) {
      throw new Error();
    }
    try {
      const result = await api.GetAllDiscussionTopic(id_post);
      dispatch(GetDiscussionAction(result));
    } catch (err) {
      console.error(err);
    }
  };
}

function AsyncCreateComments(id_post = null, data = "") {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      if (data === "") {
        throw new Error();
      }
      const result = await api.CreateDiscussion(data, id_post);
      console.info(result)
      dispatch(AsyncGetComments(id_post));
    //   if (result.info !== undefined) {
    //     throw new Error();
    //   }
    } catch (err) {
      console.error(err);
    }
    dispatch(hideLoading());
  };
}

function AsyncEditComments(id_comment = null, data = null, id_post = null) {
  return async (dispatch) => {
    try {
      if (data === null) {
        throw new Error();
      }
      const result = await api.EditDiscussion(id_comment, data);
      dispatch(AsyncGetComments(id_post));
      if (result.info !== undefined) {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
    }
  };
}

function AsyncDeleteComments(id_comment = null, id_post = null) {
  return async (dispatch) => {
    try {
      const result = await api.TakedownDiscussionUser(id_comment);
      dispatch(AsyncGetComments(id_post));
      if (result.info !== undefined) {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
    }
  };
}

export { AsyncGetComments, AsyncCreateComments, AsyncEditComments, AsyncDeleteComments };
