import { GetDetailPostAction } from "./action";
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