import { GetAllCategoryAction, GetPopularCategoryAction } from "./action";
import api from "../../utils/api";

function AsyncGetAllCategory(page = 1) {
    return async dispatch => {
        try {
            const data = await api.getAllCategory(page);

            dispatch(GetAllCategoryAction(data));
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncGetPopularCategory() {
    return async dispatch => {
        try {
            const data = await api.getAllCategory(1) || []

            const popular = []

            data.forEach((each, index) => {
                if (index < 5) {
                    popular.push(each)
                }
            })

            dispatch(GetPopularCategoryAction(popular));
        } catch (err) {
            console.error(err);
        }
    }
}

export { AsyncGetAllCategory, AsyncGetPopularCategory }