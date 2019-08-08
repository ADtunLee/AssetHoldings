import React, { Component } from "react";
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import ListSuggestion from './ListSuggestion'
import { REQUEST_GetListSuggestion, ChangeKeyword, DisplayListSuggestion, GetListSuggestion,REQUEST_GetAddressDetail } from '../../actions/map.action'

class MapSearchBox extends Component {
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
    this.props.REQUEST_GetAddressDetail(result.rel_id)
    this.setState({
      isRedirect: true,
      redirectPath: `/map?address_id=${keyword}`
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
        <div className="search-input">
          <div className={`w-100 input-search__content ${(this.props.displayListSuggestion) ? 'expanded' : 'collapsed'}`} id="autoComplete__content">
            <input
              className="form-control"
              id="autoComplete"
              type="text"
              name="keyword"
              autoComplete="off"
              placeholder="Search ..."
              value={this.props.keyword}
              tabIndex={1}
              onChange={this.handleOnChange}
            />
            <ListSuggestion
              ListSuggestion={this.props.ListSuggestion}
              handleOnResultClick={this.handleOnResultClick}
            />
          </div>
        </div>
        <div className="search-icon">
          <img src="../../../assets/img/SVG/search.svg" alt="" />
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    search:state.mapReducers.search,
    ListSuggestion: state.mapReducers.search.listSuggestion,
    keyword: state.mapReducers.search.keyword,
    displayListSuggestion: state.mapReducers.search.displayListSuggestion
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    REQUEST_GetListSuggestion: (keyword, type) => {
      dispatch(REQUEST_GetListSuggestion(keyword, type))
    },
    changeKeyword: (keyword) => {
      dispatch(ChangeKeyword(keyword))
    },
    DisplayListSuggestion: (isShow) => {
      dispatch(DisplayListSuggestion(isShow))
    },
    GetListSuggestion:(listSuggestion) =>{
      dispatch(GetListSuggestion(listSuggestion))
    },
    REQUEST_GetAddressDetail: (address_id)=>{
      dispatch(REQUEST_GetAddressDetail(address_id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapSearchBox);;
