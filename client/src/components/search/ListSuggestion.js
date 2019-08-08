import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { changeKeyword,GetListSuggestion,DisplayListSuggestion } from "../../actions/search.action";
class ListSuggestion extends Component {

  handleOnResultClick = suggestion => {
    this.props.handleOnResultClick(suggestion)
  };
  render() {
    var filteredSuggestions  = this.props.ListSuggestion;
    var suggestionsListComponent;
    if (Array.isArray(filteredSuggestions) && filteredSuggestions.length) {
      suggestionsListComponent = (
        <React.Fragment>
          {filteredSuggestions.map((suggestion, index) => {
            // Flag the active suggestion with a class
            return (
              <li
                data-result={suggestion.title}
                className="autoComplete_result "
                key={index}
                onClick={() => this.handleOnResultClick(suggestion)}
                tabIndex="1"
              >
                {suggestion.title}
              </li>
            );
          })}
        </React.Fragment>
      );
    } else {
      suggestionsListComponent = (
        <li className="no_result aaa" tabIndex="1">
          Không tìm thấy kết quả
        </li>
      );
    }
    return (
      <ul id="autoComplete_results_list">
        

        {suggestionsListComponent}
      </ul>
    );
  }
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    changeKeyword: keyword => {
      dispatch(changeKeyword(keyword));
    },
    GetListSuggestion: listSuggestion =>{
        dispatch(GetListSuggestion(listSuggestion))
    },
    DisplayListSuggestion:isShow =>{
        dispatch(DisplayListSuggestion(isShow))
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ListSuggestion);
