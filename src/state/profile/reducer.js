import { ActionType } from "./action"

export default function ProfileReducer(profile = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_DETAIL_PROFILE:
            return profile = action.payload.details
        default:
            return profile
    }
}