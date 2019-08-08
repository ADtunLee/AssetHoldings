import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import ListSuggestion from './ListSuggestion'
import { REQUEST_GetListSuggestion, changeKeyword, DisplayListSuggestion, GetListSuggestion } from '../../actions/search.action'
class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: this.props.keyword,
      isRedirect: false,
      redirectPath: ''
    };
  }
  handleOnResultClick = (result) => {
    var keyword = result.title;
    this.props.changeKeyword(keyword)
    this.props.DisplayListSuggestion(false);
    this.props.GetListSuggestion([])
    this.setState({
      isRedirect: true,
      redirectPath: `/result/all?keyword=${keyword}`
    })
  }
  handleOnChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value
    this.props.changeKeyword(value)
    if (value.length > 0) {
      this.props.DisplayListSuggestion(true)
    } else {
      this.props.DisplayListSuggestion(false)
    }
    this.props.REQUEST_GetListSuggestion(value, '')
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.isRedirect && <Redirect to={this.state.redirectPath} />}
        <div
          className={`w-100 input-search__content ${(this.props.displayListSuggestion) ? 'expanded' : 'collapsed'}`} id="autoComplete__content"
        >
          <input
            className="form-control"
            id="autoComplete"
            type="text"
            name="keyword"
            placeholder="Nhập từ khóa ..."
            value={this.props.keyword}
            tabIndex={1}
            autoComplete="off"
            onChange={this.handleOnChange}
          />
          <ListSuggestion
            ListSuggestion={this.props.ListSuggestion}
            handleOnResultClick={this.handleOnResultClick}
          ></ListSuggestion>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ListSuggestion: state.searchReducers.listSuggestion,
    keyword: state.searchReducers.keyword,
    displayListSuggestion: state.searchReducers.displayListSuggestion
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    REQUEST_GetListSuggestion: (keyword, type) => {
      dispatch(REQUEST_GetListSuggestion(keyword, type))
    },
    changeKeyword: (keyword) => {
      dispatch(changeKeyword(keyword))
    },
    DisplayListSuggestion: (isShow) => {
      dispatch(DisplayListSuggestion(isShow))
    },
    GetListSuggestion: (listSuggestion) => {
      dispatch(GetListSuggestion(listSuggestion))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
