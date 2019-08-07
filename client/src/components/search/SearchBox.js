import React, { Component } from "react";
import { connect } from "react-redux";
import ListSuggestion from './ListSuggestion'
import {REQUEST_GetListSuggestion,changeKeyword,DisplayListSuggestion} from '../../actions/search.action'
class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
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
    displayListSuggestion: state.searchReducers.displayListSuggestion
  }
}

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
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBox);
