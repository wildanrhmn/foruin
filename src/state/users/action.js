const ActionType = {
    GET_ALL_USERS: 'GET_ALL_USERS',
    GET_ALL_ORGANIZATIONS: 'GET_ALL_ORGANIZATIONS',
}

function GetAllUsersAction(users) {
    return {
        type: ActionType.GET_ALL_USERS,
        payload: {
            users
        }
    }
}

function GetAllOrganizationAction(organization) {
    return {
        type: ActionType.GET_ALL_ORGANIZATIONS,
        payload: {
            organization
        }
    }
}

export { ActionType, GetAllUsersAction, GetAllOrganizationAction }