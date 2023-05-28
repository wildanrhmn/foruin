import { GetDetailProfileAction } from "./action";
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

export { AsyncGetDetailProfile }