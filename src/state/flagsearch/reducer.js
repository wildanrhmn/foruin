import { ActionType } from "./action"

export default function QueryFlagReducer(flaging = {status : false, value : null}, action = {}) {
    switch (action.type) {
        case ActionType.FLAG_SEARCH:
            return flaging = {status: action.payload.status, value: action.payload.query}
        default:
            return flaging
    }
}