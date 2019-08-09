import React, { Component } from "react";
import { connect } from "react-redux";
import ListSuggestion from './ListSuggestion'
<<<<<<< Updated upstream
import {REQUEST_GetListSuggestion,changeKeyword,DisplayListSuggestion} from '../../actions/search.action'
=======
import { REQUEST_GetListSuggestion, changeKeyword, DisplayListSuggestion, GetListSuggestion,REQUEST_GetListItem, GetListItem } from '../../actions/search.action'
>>>>>>> Stashed changes
class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
<<<<<<< Updated upstream
=======
  handleOnResultClick = (result) => {
    var keyword = result.title;
    this.props.changeKeyword(keyword)
    this.props.DisplayListSuggestion(false);
    this.props.GetListSuggestion([])
    this.props.GetListItem([]);
    this.props.REQUEST_GetListItem(keyword,'')
    this.setState({
      isRedirect: true,
      redirectPath: `/result/all?keyword=${keyword}`
    })
  } 
>>>>>>> Stashed changes
  handleOnChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value
    this.props.changeKeyword(value)
    if(value.length > 0) {
      this.props.DisplayListSuggestion(true)
    }else {
      this.props.DisplayListSuggestion(false)
    }
    this.props.REQUEST_GetListSuggestion(value,'')
    this.setState({
        [name]: value
    });
  };
  render() {
    return (
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
      <ListSuggestion></ListSuggestion>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    keyword: state.searchReducers.keyword,
    displayListSuggestion: state.searchReducers.displayListSuggestion,
    listItem:state.searchReducers.result.listItem
  }
}

<<<<<<< Updated upstream
const mapDispatchToProps = (dispatch,props)=>{
    return {
        REQUEST_GetListSuggestion: (keyword,type)=>{
            dispatch(REQUEST_GetListSuggestion(keyword,type))
        },
        changeKeyword: (keyword)=>{
          dispatch(changeKeyword(keyword))
        },
        DisplayListSuggestion:(isShow)=>{
          dispatch(DisplayListSuggestion(isShow))
        }
=======
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
    },
    REQUEST_GetListItem: (keyword, type) => {
      dispatch(REQUEST_GetListItem(keyword, type));
    },
    GetListItem: (listItem) => {
      dispatch(GetListItem(listItem))
>>>>>>> Stashed changes
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBox);
