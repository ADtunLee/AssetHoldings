import * as actionType from "../constants/actionType";
var initialState = {
  isShowPostCategory: false,
  currentPage: 1
};
export const configReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DISPLAY_POST_CATEGORY:
      return { ...state, isShowPostCategory: action.payload };
    case actionType.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
