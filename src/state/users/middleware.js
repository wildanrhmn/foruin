import { GetAllUsersAction, GetAllOrganizationAction } from "./action";
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
        try {
            const data = await api.userGetAllOrganization(page);
            dispatch(GetAllOrganizationAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}


export { AsyncGetAllUsers, AsyncGetAllOrganizations }