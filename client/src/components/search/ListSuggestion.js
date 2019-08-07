import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { changeKeyword,GetListSuggestion,DisplayListSuggestion } from "../../actions/search.action";
class ListSuggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
      redirectPath: ""
    };
  }

  handleOnResultClick = suggestionTitle => {
    this.props.changeKeyword(suggestionTitle);
    this.props.DisplayListSuggestion(false)
    this.props.GetListSuggestion(null)
    this.setState({
      isRedirect: true,
      redirectPath: `/result/all?keyword=${suggestionTitle}`
    });
  };
  render() {
    var { filteredSuggestions } = this.props;
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
                onClick={() => this.handleOnResultClick(suggestion.title)}
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
        {this.state.isRedirect ? (
          <Redirect to={this.state.redirectPath} />
        ) : null}

        {suggestionsListComponent}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredSuggestions: state.searchReducers.listSuggestion
  };
};
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
  mapStateToProps,
  mapDispatchToProps
)(ListSuggestion);
