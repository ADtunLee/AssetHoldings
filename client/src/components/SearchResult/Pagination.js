import React, { Component } from "react";
import * as config from "../../constants/config";
class Pagination extends Component {
  render() {
    var { totalResult, currentPage } = this.props;
    var nPage = Math.ceil(totalResult / config.LIMIT_SEARCH_RESULT);
    var listPage = [];
    var maxPage = nPage > 10 ? currentPage + 4 : nPage;
    var minPage = nPage > 10 ? currentPage - 4 : 1;
    minPage = minPage >= 1 ? minPage : 1;
    var isActiveClass = "";

    
    for (var i = minPage; i <= maxPage; i++) {
      if (i === currentPage) {
        isActiveClass = "is-actived";
      } else {
        isActiveClass = "";
      }
      listPage.push(
        <a className={`sr-pagination--item ${isActiveClass}`} key={i} onClick={()=>this.props.onPageClick(this.key)}>
          {i}
        </a>
      );
    }
    console.log(currentPage);
    return (
      <div className="rp-search-result__pagination">
        <div className="search-result__pagination-container container">
          <div className="search-result__pagination-content d-flex align-items-center justify-content-center justify-content-sm-end">
            <a className="sr-pagination--btn sr-pagination--previous" href="#">
              Trước
            </a>
            <div className="sr-pagination__items d-flex align-items-center">
             {listPage}
            </div>
            <a className="sr-pagination--btn sr-pagination--next" href="#"> 
              Tiếp
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
