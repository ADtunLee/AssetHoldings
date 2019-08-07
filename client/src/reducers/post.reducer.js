import * as actionType from "../constants/actionType";
var initialState = {
  listPostCategory: [],
  currentPost: {}
};
export const postReducers = (state = initialState, action) => {
  switch (action.type) {
     
    case actionType.GET_LIST_POST_CATEGORY:
      return { ...state, listPostCategory: action.payload };
    default:
      return state;
  }
};
