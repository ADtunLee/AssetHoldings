import * as actionType from "../constants/actionType";
var initialState = {
  keyword: "",
  displayListSuggestion:false,
  listSuggestion: [],
  listResult: {
    total: 0,
    listItem: [],
    page: 1
  }
};

export const searchReducers = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.SEARCH_SUGGESTION:
      return { ...state, listSuggestion: action.payload };
    case actionType.CHANGE_SEARCH_KEYWORD:
      return { ...state, keyword: action.payload };
    case actionType.DISPLAY_LIST_SUGGESTION:
      return {...state,displayListSuggestion:action.payload}
    case actionType.COUNT_ALL_SEARCH_RESULT:
      return {
        ...state,
        listResult: { ...state.listResult, total: action.payload }
      };
    case actionType.CHANGE_RESULT_PAGE:
      return {
        ...state,
        listResult: { ...state.listResult, page: action.payload }
      };
    case actionType.GET_LIST_SEARCH_RESULT:
      return {
        ...state,
        listResult: { ...state.listResult, listItem: action.payload }
      };
    default:
      return state;
  }
};
