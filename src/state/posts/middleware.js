import { GetAllPostsAction, LikeUnlikeAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { AsyncGetAllCategory } from "../category/middleware";
import { AsyncSetFlagingSearch } from "../flagsearch/middleware";
import { AsyncGetDetailProfile } from "../profile/middleware";

function AsyncGetPosts(page = 1, category = null) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            if(category !== null){
                dispatch(AsyncSetFlagingSearch(category));
            }
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
            dispatch(AsyncGetAllCategory());
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
    console.info(data.video_attachments)
    return async dispatch => {
        try {
            if (data.body === "") {
                throw new Error()
            }
    
            const postData = {
                body: data.body,
                category: data.kategoriPost,
                video_attachments: [data.video_attachments] || [],
                picture_attachments: data.picture_attachments || [],
            }
            const result = await api.EditPost(id, postData);
            dispatch(AsyncGetPosts());
            dispatch(AsyncGetAllCategory());
            if (result.info !== undefined) {
                throw new Error()
            }
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
    return async dispatch => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.TakedownPostAdmin(id);
            dispatch(AsyncGetPosts());
            dispatch(AsyncGetAllCategory());
            if (result.info !== undefined) {
                throw new Error()
            }

            // Refresh Profile
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncVerifiedTakedownPost(id = null, id_user=null) {
    return async dispatch => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.TakedownPostVerified(id);
            dispatch(AsyncGetPosts());
            dispatch(AsyncGetAllCategory());
            dispatch(AsyncGetDetailProfile(id_user));
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