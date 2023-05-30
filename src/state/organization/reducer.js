import { ActionType } from "./action"

export default function OrganizationReducer(organization = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ORGANIZATION_PER_QUERY:
            return organization = action.payload.organization
        default:
            return organization
    }
}