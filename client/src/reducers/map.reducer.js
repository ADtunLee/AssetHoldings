import * as actionType from '../constants/actionType'
var initialState = {
    search: {
        keyword: "",
        listSuggestion: [],
        displayListSuggestion: false
    },
    currentAddress: {},
    listAddressInside: [],
    listProductMarker: [],
    listProductItem: [],
    currentProduct: {},
    labelInfoWindow: {}
}

export const mapReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionType.MAP_CHANGE_KEYWORD:
            return { ...state, search: { ...state.search, keyword: action.payload } }
        case actionType.MAP_DISPLAY_LIST_SUGGESTION:
            return { ...state, search: { ...state.search, displayListSuggestion: action.payload } }
        case actionType.MAP_GET_LIST_SUGGESTION:
            return { ...state, search: { ...state.search, listSuggestion: action.payload } }


        case actionType.MAP_GET_LIST_PRODUCT_MARKER:
            return { ...state, listProductMarker: action.payload }
        case actionType.MAP_GET_LIST_PRODUCT_ITEM:
            return { ...state, listProductItem: action.payload }
        case actionType.MAP_GET_CURRENT_ADDRESS:
            return { ...state, currentAddress: action.payload }
        case actionType.MAP_SET_LIST_ADDRESS_INSIDE:
            return { ...state, listAddressInside: action.payload }

        default: return state;
    }
}