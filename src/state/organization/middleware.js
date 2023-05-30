import { GetOrganizationPerQueryAction } from "./action";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

function AsyncGetOrganizationsWithQuery(page = 1, query) {
        return async dispatch => {
            dispatch(showLoading());
            try {
                const data = await api.userGetAllOrganization(page, query);
                dispatch(GetOrganizationPerQueryAction(data));
            } catch (err) {
                console.error(err);
            }
            dispatch(hideLoading());
        }
    }

    export { AsyncGetOrganizationsWithQuery }   