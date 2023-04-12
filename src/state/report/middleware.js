import { GetAllReportAction } from "./action";
import api from "../../utils/api";

function AsyncCreateReport(payload) {
    return async dispatch => {
        try {
            await api.adminGetAllReport(payload);

            const reports = await api.userGetAllReport(1);

            dispatch(GetAllReportAction(reports));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncAdminGetReports(page = 1) {
    return async dispatch => {
        try {
            const data = await api.adminGetAllReport(page);

            dispatch(GetAllReportAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncUserGetReports(page = 1) {
    return async dispatch => {
        try {
            const data = await api.userGetAllReport(page);

            dispatch(GetAllReportAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncApproveReport(id_report, payload) {
    return async dispatch => {
        try {
            await api.adminApproveReport(id_report, payload);
            const data = await api.adminGetAllReport(1);

            dispatch(GetAllReportAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncTakedownReport(id_report) {
    return async dispatch => {
        try {
            await api.adminTakedownReport(id_report);
            const data = await api.adminGetAllReport(1);

            dispatch(GetAllReportAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}


export { AsyncCreateReport, AsyncAdminGetReports, AsyncUserGetReports, AsyncApproveReport, AsyncTakedownReport }