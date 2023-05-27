const ActionType = {
    GET_ALL_CATEGORY: 'GET_ALL_CATEGORY',
}

function GetAllCategoryAction(category) {
    return {
        type: ActionType.GET_ALL_CATEGORY,
        payload: {
            category
        }
    }
}

export { ActionType, GetAllCategoryAction }