const ActionType = {
    GET_ALL_CATEGORY: 'GET_ALL_CATEGORY',
    GET_POPULAR_CATEGORY: 'GET_POPULAR_CATEGORY',
}

function GetAllCategoryAction(category) {
    return {
        type: ActionType.GET_ALL_CATEGORY,
        payload: {
            category
        }
    }
}

function GetPopularCategoryAction(category) {
    return {
        type: ActionType.GET_POPULAR_CATEGORY,
        payload: {
            category
        }
    }
}

export { ActionType, GetAllCategoryAction, GetPopularCategoryAction }