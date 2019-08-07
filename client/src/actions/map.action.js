import callAPI from "../utils/callAPI.util";
import * as actionType from "../constants/actionType";

export const REQUEST_GetListProductMarker = (address_id) => {
    return dispatch => {
        return callAPI('post/list_category')
            .then(response => {
                dispatch(GetListPostCategory(response.data))
            })
    }
}
export const GetListPostCategory = (data) => {
    return {
        type: actionType.MAP_GET_LIST_PRODUCT_MARKER,
        payload:data
    }
}
