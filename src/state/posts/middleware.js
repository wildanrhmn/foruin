import { GetAllPostsAction, LikeUnlikeAction } from "./action";
import { GetDetailPostAction } from "../detailPost/action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

function AsyncGetPosts(page = 1, category = null) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.GetAllPosts(page, category);
            dispatch(GetAllPostsAction(data));
        } catch (err) {
            console.error(err);
        }
        dispatch(hideLoading());
    }
}

function AsyncCreatePost(data) {
    return async dispatch => {    
        try {
            if (data.body === "") {
                throw new Error()
            }
            const postData = {
                body: data.isiPost,
                category: data.kategoriPost,
                video_attachments: [data.uploadedVideo?.file] || [],
                picture_attachments: data.gambarPost || [],
            }
            const result = await api.createPost(postData);
            dispatch(AsyncGetPosts());
            if (result.info !== undefined) {
                throw new Error()
            }
            // Redirect to Profile
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncUpdatePost(id = null, data) {
    return async dispatch => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.EditPost(id, data);

            if (result.info !== undefined) {
                throw new Error()
            }

            // Get Detail Post
            const details = await api.getDetailPost(id);

            if (!result) {
                throw new Error()
            }

            dispatch(GetDetailPostAction(details))
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncLikePost(id = null, id_user = null) {
    return async dispatch => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.LikeUnlikePost(id);
            console.info(result)
            dispatch(LikeUnlikeAction(id, id_user));
            // Like Unlike Setup
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

            // Refresh Profile
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncVerifiedTakedownPost(id = null) {
    return async dispatch => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.TakedownPostVerified(id);
            dispatch(AsyncGetPosts());
            if (result.info !== undefined) {
                throw new Error()
            }
            
            // Refresh Profile
        } catch (err) {
            console.error(err);
        }
    }
}

export { AsyncGetPosts, AsyncCreatePost, AsyncUpdatePost, AsyncLikePost, AsyncAdminTakedownPost, AsyncVerifiedTakedownPost }