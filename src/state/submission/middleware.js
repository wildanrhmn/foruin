import { GetSubmissionsAction } from "./action";
import api from "../../utils/api";

function AsyncCreateSubmission(payload) {
    return async dispatch => {
        try {
            await api.createSubmission(payload);

            const submissions = await api.userGetAllSubmission(1);

            dispatch(GetSubmissionsAction(submissions));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncAdminGetSubmissions(page = 1) {
    return async dispatch => {
        try {
            const data = await api.adminGetAllSubmission(page);

            dispatch(GetSubmissionsAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncUserGetSubmissions(page = 1) {
    return async dispatch => {
        try {
            const data = await api.userGetAllSubmission(page);

            dispatch(GetSubmissionsAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncApproveSubmission(id_submission, payload) {
    return async dispatch => {
        try {
            await api.adminApproveSubmission(id_submission, payload);
            const submissions = await api.userGetAllSubmission(1);

            dispatch(GetSubmissionsAction(submissions));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncTakedownSubmission(id_submission) {
    return async dispatch => {
        try {
            await api.adminTakedownSubmission(id_submission);
            const submissions = await api.userGetAllSubmission(1);

            dispatch(GetSubmissionsAction(submissions));
        } catch (err) {
            console.error(err);
        }
    }
}


export { AsyncCreateSubmission, AsyncAdminGetSubmissions, AsyncUserGetSubmissions, AsyncApproveSubmission, AsyncTakedownSubmission }