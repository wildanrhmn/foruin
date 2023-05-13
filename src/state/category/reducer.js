import { ActionType } from "./action"

export default function CategoryReducer(category = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_CATEGORY:
            return category = action.payload.category
        case ActionType.GET_POPULAR_CATEGORY:
            return category = action.payload.category
        default:
            return category
    }
}