import * as actionType from "../constants/actionType";
var initialState = {
  listPostCategory: [],
  currentPost: {}
};
export const postReducers = (state = initialState, action) => {
  switch (action.type) {
     
    case actionType.GET_LIST_POST_CATEGORY:
            console.log(action)
      return { ...state, listPostCategory: action.payload };
    default:
      return state;
  }
};
