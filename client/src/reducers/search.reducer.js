import * as actionType from "../constants/actionType";
var initialState = {
  keyword: "",
  displayListSuggestion:false,
  listSuggestion: [],
  result: {
    total: 0,
    listItem: [],
    page: 1
  }
};

export const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SEARCH_SUGGESTION:
      return { ...state, listSuggestion: action.payload };
    case actionType.CHANGE_SEARCH_KEYWORD:
      return { ...state, keyword: action.payload };
    case actionType.DISPLAY_LIST_SUGGESTION:
      return {...state,displayListSuggestion:action.payload}
    case actionType.COUNT_ALL_SEARCH_RESULT:
      console.log(action)
      return {
        ...state,
        result: { ...state.result, total: action.payload }
      };
    case actionType.CHANGE_RESULT_PAGE:
      return {
        ...state,
        result: { ...state.result, page: action.payload }
      };
    case actionType.GET_LIST_SEARCH_RESULT:
      return {
        ...state,
        result: { ...state.result, listItem: action.payload }
      };
    default:
      return state;
  }
};
