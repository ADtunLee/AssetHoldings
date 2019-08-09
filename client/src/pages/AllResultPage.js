import React, { Component } from 'react';
import ListItem from '../components/SearchResult/ListItem';
import Pagination from "../components/SearchResult/Pagination";
import { connect } from "react-redux";
import { REQUEST_GetListPostCategory, DisplayPostCategory } from "../actions/post.action";
import { REQUEST_NumberOfResult, } from "../actions/search.action";
import getURLParams from "../utils/getUrlParam";
class AllResultPage extends Component {
    componentWillMount() {
        var keyword = getURLParams()["keyword"] || "";
        this.props.REQUEST_NumberOfResult(keyword, "post");
        this.props.REQUEST_GetListPostCategory(); 
        this.props.DisplayPostCategory(false);
      }
      
      handleOnPageClick = page => {
        console.log(page)
      };
    render() {
        return (
            <div>
                <ListItem></ListItem>
                <Pagination onPageClick={this.handleOnPageClick} currentPage={this.props.currentPage} totalResult={this.props.totalSearchResult}/>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      currentPage:state.configReducers.currentPage,
      keyword: state.searchReducers.keyword,
      totalSearchResult:state.searchReducers.result.total,
      listItem: state.searchReducers.result.listItem,
      displayPostCategory: state.configReducers.isShowPostCategory
    };
  };
  const mapDispatchToProps = (dispatch, props) => {
    return {
      REQUEST_GetListPostCategory: () => {
        dispatch(REQUEST_GetListPostCategory());
      },
      DisplayPostCategory: (isShow) => {
        dispatch(DisplayPostCategory(isShow))
      },
      REQUEST_NumberOfResult: (keyword, type) => {
        dispatch(REQUEST_NumberOfResult(keyword, type));
      },
    };
  };
  

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  ) (AllResultPage);