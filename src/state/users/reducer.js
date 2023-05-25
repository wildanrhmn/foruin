import { ActionType } from "./action"

export default function UsersReducer(users = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ALL_USERS:
            return users = action.payload.users
        case ActionType.GET_ALL_ORGANIZATIONS:
            return users = action.payload.organization
        default:
            return users
    }
}