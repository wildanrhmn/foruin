const ActionType = {
        FLAG_SEARCH: 'FLAG_SEARCH',
    }
    
       function SetFlagSearch(status, query) {
        return {
            type: ActionType.FLAG_SEARCH,
            payload: {
                query,
                status
            }
        }
    }
    
    export { ActionType, SetFlagSearch }