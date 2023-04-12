import { GetPostsAction } from "./action";
import api from "../../utils/api";

function AsyncGetPosts(page = 1) {
    return async dispatch => {
        try {
            const data = await api.GetAllPosts(page);
            dispatch(GetPostsAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncCreatePost(data) {
    return async () => {
        try {
            if (data.body === "") {
                throw new Error()
            }

            const result = await api.createPost(data);

            if (result.info !== undefined) {
                throw new Error()
            }
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncUpdatePost(id = null, data) {
    return async () => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.EditPost(id, data);

            if (result.info !== undefined) {
                throw new Error()
            }
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncLikePost(id = null) {
    return async () => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.LikeUnlikePost(id);

            if (result.info !== undefined) {
                throw new Error()
            }
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncAdminTakedownPost(id = null) {
    return async () => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.TakedownPostAdmin(id);

            if (result.info !== undefined) {
                throw new Error()
            }
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncVerifiedTakedownPost(id = null) {
    return async () => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.TakedownPostVerified(id);

            if (result.info !== undefined) {
                throw new Error()
            }
        } catch (err) {
            console.error(err);
        }
    }
}

export { AsyncGetPosts, AsyncCreatePost, AsyncUpdatePost, AsyncLikePost, AsyncAdminTakedownPost, AsyncVerifiedTakedownPost }