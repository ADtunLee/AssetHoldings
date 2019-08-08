import callAPI from "../utils/callAPI.util";
import * as actionType from "../constants/actionType";
import * as config from '../constants/config'
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
        payload: data
    }
}

export const ChangeKeyword = (keyword = "") => {
    return {
        type: actionType.MAP_CHANGE_KEYWORD,
        payload: keyword
    }
}

export const DisplayListSuggestion = (isDisplay = false) => {
    return {
        type: actionType.MAP_DISPLAY_LIST_SUGGESTION,
        payload: isDisplay
    }
}
export const REQUEST_GetListSuggestion = keyword => {
    return dispatch => {
      return callAPI(
        `map/get_list_suggesstion?keyword=${keyword}&limit=${config.LIMIT_SEARCH_RESULT}`,
        "GET",
        {}
      )
        .then(result => {
          dispatch(GetListSuggestion(result.data));
        })
        .catch(err => {
          dispatch(GetListSuggestion([]));
        });
    };
  };

export const GetListSuggestion = (listSuggestion) =>{
    return {
        type:actionType.MAP_GET_LIST_SUGGESTION,
        payload:listSuggestion
    }
}

export const REQUEST_GetAddressDetail = (address_id) => {
    return dispatch => {
      return callAPI(`map/get_by_address_id?address_id=${address_id}&limit=${config.PRODUCT_MARKER_ON_MAP}`)
        .then(result => {
            console.log(result)
          dispatch(GetAddressDetail(result.data.address[0]))
          dispatch(GetListProductMarker(result.data.ListProduct))
          dispatch(GetListProductItem(result.data.ListProduct))
          dispatch(SetListAddressInside(result.data.listPolygonInside))
        })
    }
  }
  
  export const GetAddressDetail = (address) => {
    return {
      type: actionType.MAP_GET_CURRENT_ADDRESS,
      payload: address
    }
  }
  export const GetListProductMarker = (listProductMarker) => {
    return {
      type: actionType.MAP_GET_LIST_PRODUCT_MARKER,
      payload:listProductMarker
    }
  }
  export const GetListProductItem = (listProductItem) => {
    return {
      type: actionType.MAP_GET_LIST_PRODUCT_ITEM,
      payload:listProductItem
    }
  }
  export const SetListAddressInside = (listAddress) => {
    return {
      type: actionType.MAP_SET_LIST_ADDRESS_INSIDE,
      payload: listAddress
    }
  }