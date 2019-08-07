import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class SearchResultNav extends Component {
  render() {
    return (
      <div className="result-pages__header-navigation">
        <div className="rp-header-navigation header-navigation__container">
          <div className="header-navigation__items d-flex">
            <NavLink
              className="header-navigation--item hn-item--text"
              to="/result/all"
              activeClassName="is-actived"
            >
              <span className="hn-item--text" >
                Tất cả
              </span>
            </NavLink>
            <NavLink className="header-navigation--item hn-item--text"
             to="/result/new"
             activeClassName="is-actived">
              <span
                className="hn-item--text"
               
              >
                Thông tin
              </span>
            </NavLink>
            <NavLink className="header-navigation--item hn-item--text"
            to="/map">
              <span
                className="hn-item--text"
                
               
              >
                Bản đồ
              </span>
            </NavLink>
            <NavLink className="header-navigation--item hn-item--text">
              <span
                className="hn-item--text"
                href="/result/price"
                activeClassName="is-actived"
              >
                Bảng giá
              </span>
            </NavLink>
            <div className="header-navigation--item dropdown">
              <div
                className="hn-item--text dropdown-toggle"
                data-toggle="dropdown"
              >
                Thêm
              </div>
              <div className="dropdown-menu hn-menu__add">
                <div className="dropdown-item">
                  <a href="#">Danh bạ</a>
                </div>
                <div className="dropdown-item">
                  <a href="#">Tài nguyên</a>
                </div>
                <div className="dropdown-item">
                  <a href="#">Hỏi đáp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultNav;
