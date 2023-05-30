import { GetDetailProfileAction, LikeUnlikeProfileAction } from "./action";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

function AsyncGetDetailProfile(id = null){
    return async (dispatch) => {
        dispatch(showLoading());
        if(id === null){
            throw new Error();
        }
        try{
            const response = await api.userGetProfile(id);
                dispatch(GetDetailProfileAction(response));     
        }
        catch(err){
            console.error(err);
        }
        dispatch(hideLoading());
    }
}

function AsyncLikePostProfile(id = null, id_user = null) {
    return async dispatch => {
        try {
            if (id === null) {
                throw new Error()
            }

            const result = await api.LikeUnlikePost(id);
            console.info(result)
            dispatch(LikeUnlikeProfileAction(id, id_user));
            // Like Unlike Setup
        } catch (err) {
            console.error(err);
        }
    }
}


export { AsyncGetDetailProfile, AsyncLikePostProfile }