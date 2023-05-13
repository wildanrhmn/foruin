import { GetDetailPostAction } from "./action";
import api from "../../utils/api";

function AsyncGetDetailPost(id = null) {
    return async dispatch => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.getDetailPost(id);

            if (!result) {
                throw new Error()
            }

            dispatch(GetDetailPostAction(result))
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncLikePost(id = null) {
    return async dispatch => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.LikeUnlikePost(id);

            if (result.info !== undefined) {
                throw new Error()
            }

            const details = await api.getDetailPost(id);

            if (!details) {
                throw new Error()
            }

            dispatch(GetDetailPostAction(details))
        } catch (err) {
            console.error(err);
        }
    }
}

export { AsyncGetDetailPost, AsyncLikePost }