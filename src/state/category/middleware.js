import { GetAllCategoryAction } from "./action";
import api from "../../utils/api";

function AsyncGetAllCategory() {
    return async dispatch => {
        try {
            const data = await api.getAllCategory();
            dispatch(GetAllCategoryAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}
export { AsyncGetAllCategory }