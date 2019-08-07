import callAPI from "../utils/callAPI.util";
import * as config from "../constants/config";
import * as actionType from "../constants/actionType";
export const REQUEST_GetListSuggestion = (keyword, type) => {
  return dispatch => {
    return callAPI(
      `search/suggestion?keyword=${keyword}&limit=${
        config.LIMIT_SEARCH_SUGGESTION
      }`,
      "GET",
      {}
    )
      .then(result => {
        dispatch(GetListSuggestion(result.data, keyword));
      })
      .catch(err => {
        dispatch(GetListSuggestion([]));
      });
  };
};
export const GetListSuggestion = (data) => {
  return {
    type: actionType.SEARCH_SUGGESTION,
    payload: data
  };
};

export const DisplayListSuggestion =(isShow ) =>{
  return {
    type: actionType.DISPLAY_LIST_SUGGESTION,
    payload:isShow
  }
}
export const changeKeyword = (newKeyword) =>{
  console.log(newKeyword)
  return {
    type:actionType.CHANGE_SEARCH_KEYWORD,
    payload:newKeyword
  }
}

//GET numberof Result
export const REQUEST_NumberOfResult = keyword => {
  return dispatch => {
    return callAPI(
      `search/count_by_keyword?keyword=${keyword}`,
      "GET",
      {}
    ).then(result => {
      //data { total_search: number}
      dispatch(NumberOfResult(result.data.total_search));
    });
  };
};
export const NumberOfResult = total => {
  return {
    type: actionType.COUNT_ALL_SEARCH_RESULT,
    payload:total
  };
};


