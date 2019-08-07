import React, { Component } from 'react';

class HomeFooterNav extends Component {
    render() {
        return (
            <div className="hp-footer__links layout-footer__links d-flex justify-content-center justify-content-lg-start">
                <div className="hp-footer--link layout-footer--link"><a href="#">Giới thiệu</a></div>
                <div className="hp-footer--link layout-footer--link"><a href="#">Hướng dẫn</a></div>
              </div>
        );
    }
}

export default HomeFooterNav;