import React, { Component } from 'react';
import HomeNav from '../components/Nav/HomeNav'
import HomeMobileNav from '../components/Nav/HomeMobileNav'
import HomeFooterNav from '../components/Nav/HomeFooterNav'
import MarqueePost from '../components/HomePage/MarqueePost'
import '../assets/stylesheets/index.css'
import '../assets/stylesheets/pages/_home.css'
class Homelayout extends Component {
    render() {
        return (
            <div className="section-homepage">
        <div className="container-fluid homepage__container">
          <div className="homepage__header layout-header d-none d-lg-block">
            <div className="homepage__header-container layout-header__container">
              <div className="homepage__header-top layout-header__top">
                <div className="d-flex align-items-center hp-header-top__container lh-top__container">
                  <div className="ml-auto hp-header-top__menu lh-top__menu">

                    <HomeNav />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-header_mobile d-lg-none">
            <HomeMobileNav />
            
          </div>
         {this.props.children}
          <div className="homepage__footer layout-footer">
            <div className="homepage__footer-container">
             <HomeFooterNav />
              {/* Desktop Display*/}
             <MarqueePost />
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default Homelayout;