import callAPI from "../utils/callAPI.util";
import * as actionType from "../constants/actionType";

//get POST category
export const REQUEST_GetListPostCategory = () => {
    return dispatch => {
        return callAPI('post/list_category')
            .then(response => {
                dispatch(GetListPostCategory(response.data))
            })
    }
}
export const GetListPostCategory = (data) => {
    return {
        type: actionType.GET_LIST_POST_CATEGORY,
        payload:data
    }
}

export const DisplayPostCategory = (ishowPostCategory) => {
    return {
        type: actionType.DISPLAY_POST_CATEGORY,
        payload:ishowPostCategory
    }
}
