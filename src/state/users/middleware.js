import { GetAllUsersAction, GetAllOrganizationAction } from "./action";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

function AsyncGetAllUsers(page = 1) {
    return async dispatch => {
        try {
            const data = await api.GetAllPosts(page);
            dispatch(GetAllUsersAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncGetAllOrganizations(page = 1) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.userGetAllOrganization(page);
            dispatch(GetAllOrganizationAction(data));
        } catch (err) {
            console.error(err);
        }
        dispatch(hideLoading());
    }
}

export { AsyncGetAllUsers, AsyncGetAllOrganizations }