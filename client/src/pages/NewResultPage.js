import React, { Component } from "react";
import ListItem from "../components/SearchResult/ListItem";
import { connect } from "react-redux";
import Pagination from "../components/SearchResult/Pagination";
import { REQUEST_GetListPostCategory } from "../actions/post.action";
class NewResultPage extends Component {
  componentWillMount() {
    this.props.REQUEST_GetListPostCategory();
  }

  render() {
    return (
      <React.Fragment>
        <ListItem Pagination="" />
        <Pagination />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
    
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    REQUEST_GetListPostCategory: () => {
      dispatch(REQUEST_GetListPostCategory());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewResultPage);
