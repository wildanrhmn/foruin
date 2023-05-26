import { GetDetailPostAction, LikeUnlikeDetailPostAction  } from "./action";
import axios from "axios";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

function AsyncGetDetailPost(id = null) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            if (id === null) {
                throw new Error()
            }
            // const result = await api.getDetailPost(id);
            // console.info(result)
                const baseUrl = "https://forum-himsi-api.vercel.app";        
                const url = baseUrl + "/post/" + id;
                const response = await axios.get(url);
            dispatch(GetDetailPostAction(response.data.data))
        } catch (err) {
            console.error(err);
        }
        dispatch(hideLoading());
    }
}

function AsyncLikePostDetail(id = null, id_user = null) {
    console.info(id, id_user)
    return async dispatch => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.LikeUnlikePost(id);
            dispatch(LikeUnlikeDetailPostAction(id, id_user))
            console.info(result)
            // const details = await pi.getDetailPost(id);a
            // if (!details) {
            //     throw new Error()
            // }
            // dispatch(GetDetailPostAction(details))
        } catch (err) {
            console.error(err);
        }
    }
}

export { AsyncGetDetailPost, AsyncLikePostDetail }