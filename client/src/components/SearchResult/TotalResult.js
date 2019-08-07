import React, { Component } from "react";
import { connect } from "react-redux";
class TotalResult extends Component {
  render() {
    return (
      <div className="search-result__header-text">
        <span>
          Khoảng <span className="fw-5">{this.props.totalSearchResult}</span> kết quả
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      totalSearchResult:state.searchReducers.result.total
  };
};
export default connect(
  mapStateToProps,
  null
)(TotalResult);
