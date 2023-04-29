import { GetPostsAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

function AsyncGetPosts() {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.GetAllPosts();
            dispatch(GetPostsAction(data));
        } catch (err) {
            console.error(err);
        }
        dispatch(hideLoading());
    }
}

export { AsyncGetPosts }