import * as actionType from '../constants/actionType'
var initialState = {
    listProductMarker: [],
    listProductItem: [],
    currentProduct: {},
    labelInfoWindow: {}
}

export const mapReducers = (state = initialState,action) =>{
    switch(action.type){
        case actionType.MAP_GET_LIST_PRODUCT_MARKER :
            return {...state,listProductMarker:action.payload}
        default: return state;
    }
}