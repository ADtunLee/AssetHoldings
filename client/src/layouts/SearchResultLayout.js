import React, { Component } from "react";
import ChatSideBar from "../components/ChatSideBar";
import SearchBox from "../components/search/SearchBox";
import SearchResultNav from "../components/Nav/SearchResultNav";
import ListPostCategory from "../components/SearchResult/ListPostCategory";
import "../assets/stylesheets/index.css";
import "../assets/stylesheets/pages/_resultpages.css";
import "../assets/stylesheets/partials/map/bootstrap-tagsinput.css";
import "../assets/stylesheets/partials/chat/index.css";
class SearchResultLayout extends Component {
  render() {
    return (
      <section className="section__result-pages">
        <div className="container-fluid result-pages__container">
          <div className="result-pages__header layout-header">
            <div className="result-pages__header-container layout-header__container">
              <div className="result-pages__header-top layout-header__top">
                <div className="d-flex align-items-center rp-header-top__container lh-top__container">
                  <div className="rp-header-top__logo lh-top__logo">
                    <div className="header-top--logo lh-top--logo">
                      <a href="/">
                        <img src="../../../assets/img/icon-asset.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="rp-header-top__search-input lh-top__search-input">
                    <div className="search-input">
                      <SearchBox />
                    </div>
                  </div>
                  <div className="ml-auto rp-header-top__menu lh-top__menu">
                    <div className="d-flex align-items-center ht-menu__items">
                      <div className="ht-menu--item ht-menu--item__tools ht-menu-tools dropdown">
                        <div
                          className="menu-tools__btn-toggle dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <img
                            className="ht-menu--icon"
                            src="../../../assets/img/Group 1.png"
                            alt=""
                          />
                        </div>
                        <div className="menu-tools__dropdown-menu dropdown-menu">
                          <div className="mt--dropdown-item dropdown-item">
                            <a href="#">
                              <img
                                src="../../../assets/img/Group 1569.png"
                                alt=""
                              />
                              <span className="ht-menu--text">
                                Tính toán khoản vay
                              </span>
                            </a>
                          </div>
                          <div className="mt--dropdown-item dropdown-item">
                            <a href="#">
                              <img
                                src="../../../assets/img/baseline-insert_chart-24px.png"
                                alt=""
                              />
                              <span className="ht-menu--text">
                                Tính toán hiệu quả dự án
                              </span>
                            </a>
                          </div>
                          <div className="mt--dropdown-item dropdown-item">
                            <a href="#">
                              <img
                                src="../../../assets/img/baseline-monetization_on-24px.png"
                                alt=""
                              />
                              <span className="ht-menu--text">
                                Tài chính cá nhân
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="ht-menu--item">
                        <div className="ht-menu__notify">
                          <a href="#">
                            <img
                              className="ht-menu--icon"
                              src="../../assets/img/Group 22.png"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="ht-menu--item">
                        <a
                          className="ht-menu__login menu-tools--btn-login"
                          href="/dang-nhap"
                        >
                          <img
                            className="ht-menu--icon ht-menu--icon-avatar"
                            src="../../assets/img/icon-avatar.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SearchResultNav />
              <ListPostCategory />
            </div>
          </div>
          <div className="result-pages__body">
            <div className="result-pages__body-container container">
              <div className="result-pages__search-result">
                {this.props.children}
              </div>
            </div>
          </div>
          <div className="result-pages__footer layout-footer">
            <div className="result-pages__footer-container">
              <div className="rs-footer__links layout-footer__links d-flex justify-content-center justify-content-lg-start">
                <div className="rs-footer--link layout-footer--link">
                  <a href="#">Giới thiệu</a>
                </div>
                <div className="rs-footer--link layout-footer--link">
                  <a href="#">Hướng dẫn</a>
                </div>
              </div>
              {/* Desktop*/}
              <div className="rs-footer__quick-views layout-footer__quick-views d-none d-lg-flex">
                <div className="rs-footer__quick-view layout-footer--quick-view w-50">
                  <marquee>
                    <div className="quick-view__content">
                      <span>
                        <span className="quick-view--title">Tin nhanh 1: </span>{" "}
                        Lorem Ipsum. Proin gravida nibh vel velit auctor
                        aliquet. Aenean sollicitudin, lorem quis biben{" "}
                        <a href="#">Xem nhanh</a>
                      </span>
                    </div>
                  </marquee>
                </div>
                <div className="rs-footer__quick-view layout-footer--quick-view w-50">
                  <marquee>
                    <div className="quick-view__content">
                      <span>
                        <span className="quick-view--title">Tin nhanh 2: </span>{" "}
                        Lorem Ipsum. Proin gravida nibh vel velit auctor
                        aliquet. Aenean sollicitudin, lorem quis biben{" "}
                        <a href="#">Xem nhanh</a>
                      </span>
                    </div>
                  </marquee>
                </div>
              </div>
              {/* Mobile*/}
              <div className="rs-footer__quick-views layout-footer__quick-views d-flex d-lg-none">
                <div className="rs-footer__quick-view layout-footer--quick-view">
                  <marquee>
                    <div className="quick-view__content d-inline-flex">
                      <span>
                        <span className="quick-view--title">Tin nhanh 1: </span>{" "}
                        Lorem Ipsum. Proin gravida nibh vel velit auctor
                        aliquet. Aenean sollicitudin, lorem quis biben{" "}
                        <a href="#">Xem nhanh</a>
                      </span>
                    </div>
                    <div className="quick-view__content d-inline-flex">
                      <span>
                        <span className="quick-view--title">Tin nhanh 2: </span>{" "}
                        Lorem Ipsum. Proin gravida nibh vel velit auctor
                        aliquet. Aenean sollicitudin, lorem quis biben{" "}
                        <a href="#">Xem nhanh</a>
                      </span>
                    </div>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ChatSideBar /> */}
      </section>
    );
  }
}

export default SearchResultLayout;
