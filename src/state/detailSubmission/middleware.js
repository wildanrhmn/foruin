import { GetDetailSubmissionAction } from "./action";
import api from "../../utils/api";

function AsyncAdminGetDetailSubmission(id_submission) {
    return async dispatch => {
        try {
            const data = await api.adminGetSubmissionDetail(id_submission);

            dispatch(GetDetailSubmissionAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncUserGetDetailSubmssion(id_submission) {
    return async dispatch => {
        try {
            const data = await api.userGetSubmissionDetail(id_submission);

            dispatch(GetDetailSubmissionAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}


export { AsyncAdminGetDetailSubmission, AsyncUserGetDetailSubmssion }