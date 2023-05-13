import { GetDetailReportAction } from "./action";
import api from "../../utils/api";

function AsyncAdminGetDetailReport(id_report) {
    return async dispatch => {
        try {
            const data = await api.adminGetReportDetail(id_report);

            dispatch(GetDetailReportAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncUserGetDetailReport(id_report) {
    return async dispatch => {
        try {
            const data = await api.userGetReportDetail(id_report);

            dispatch(GetDetailReportAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}


export { AsyncAdminGetDetailReport, AsyncUserGetDetailReport }