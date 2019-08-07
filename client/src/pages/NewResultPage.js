import React, { Component } from "react";
import ListItem from "../components/SearchResult/ListItem";
import { connect } from "react-redux";
import Pagination from "../components/SearchResult/Pagination";
import { REQUEST_GetListPostCategory } from "../actions/post.action";
import { REQUEST_NumberOfResult } from "../actions/search.action";
import getURLParams from "../utils/getUrlParam";
class NewResultPage extends Component {
  componentWillMount() {
    var keyword = getURLParams()["keyword"] || "";
    this.props.REQUEST_NumberOfResult(keyword, "post");
    this.props.REQUEST_GetListPostCategory();
  }
  handleOnPageClick = page => {
    console.log(page)
  };
  render() {
    return (
      <React.Fragment>
        <ListItem Pagination="" />
        <Pagination onPageClick={this.handleOnPageClick} currentPage={this.props.currentPage} totalResult={this.props.totalSearchResult}/>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentPage:state.configReducers.currentPage,
    keyword: state.searchReducers.keyword,
    totalSearchResult:state.searchReducers.result.total
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    REQUEST_GetListPostCategory: () => {
      dispatch(REQUEST_GetListPostCategory());
    },
    REQUEST_NumberOfResult: (keyword, type) => {
      dispatch(REQUEST_NumberOfResult(keyword, type));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewResultPage);
