import React, { Component } from "react";
import { AddScriptTag } from "../constants/function";
import HomeLayout from "../layouts/Homelayout";
import ListSuggestion from "../components/search/ListSuggestion";
import SearchBox from "../components/search/SearchBox";
class HomePage extends Component {
  componentDidMount() {
    var script = ["../../assets/scripts/homepage/index.js"];
    AddScriptTag(script, document.body);
  }

  render() {
    return (
      <HomeLayout>
        <div className="homepage-body">
          <div className="homepage-body__container">
            <div className="homepage-body__content">
              <div className="center d-flex justify-content-center align-items-center">
                <div className="center-content d-flex flex-column justify-content-center">
                  <div className="homepage--logo">
                    <div className="logo--container d-flex justify-content-center">
                      <img src="../../assets/img/asset-logo.png" alt="" />
                    </div>
                  </div>
                  <div className="homepage--description">
                    <div className="description--container d-flex flex-column align-items-center">
                      <span className="description-line line-1">
                        Là dự án phi lợi nhuận
                      </span>
                      <span className="description-line line-2">
                        nơi lưu trữ và cung cấp thông tin về thị trường Bất động
                        sản<span className="highlight">Việt Nam …</span>
                      </span>
                    </div>
                  </div>
                  <div className="homepage--input-search">
                    <div className="input-search__container d-flex justify-content-center">
                      <SearchBox />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    );
  }
}

export default HomePage;
