import { GetPostsAction } from "./action";
import api from "../../utils/api";

function AsyncGetPosts() {
    return async dispatch => {
        try {
            const data = await api.GetAllPosts();
            dispatch(GetPostsAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

export { AsyncGetPosts }