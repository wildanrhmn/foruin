const ActionType = {
        GET_ORGANIZATION_PER_QUERY: 'GET_ORGANIZATION_PER_QUERY',
    }

    function GetOrganizationPerQueryAction(organization) {
        return {
            type: ActionType.GET_ORGANIZATION_PER_QUERY,
            payload: {
                organization
            }
        }
    }
    
    export { ActionType, GetOrganizationPerQueryAction }