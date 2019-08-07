import React, { Component } from 'react';

class MobileDisplay extends Component {
    render() {
        return (
            <div className="map-mobile row flex-xl-nowrap d-xl-none">
            <div className="container">
              <div className="homepage-header_mobile d-xl-none" id="m1-header_mobile">
                <div className="m1-header_mobile__container">
                  <div className="m1-header_mobile__content d-flex justify-content-between">
                    <div className="m1-menu_mobile__drawer d-flex align-items-center">
                      <div className="mobile-drawer__content">
                        <div className="drawer-toggler" data-toggle="modal" data-target="#drawerToggleExternalContentMobile" aria-controls="drawerToggleExternalContentMobile" aria-expanded="false" aria-label="Toggle navigation"><img src="../../assets/img/icon-drawer.png" alt="" /></div>
                        <div className="modal fadeInRight" id="drawerToggleExternalContentMobile" tabIndex={-1} role="dialog" aria-labelledby="drawerToggleExternalContentMobile" aria-hidden="true">
                          <div className="modal-content">
                            <nav className="mobile-navbar">
                              <div className="mobile-navbar__content"><a className="navbar-brand" href="/"><img src="../../assets/img/asset-logo.png" alt="" /></a>
                                <div className="navbar__items">
                                  <div className="navbar--item"><a href="/ket-qua/thong-tin">Thông tin</a></div>
                                  <div className="navbar--item"><a href="/ban-do">Bản đồ</a></div>
                                  <div className="navbar--item"><a href="/ket-qua/bang-gia">Bảng giá</a></div>
                                  <div className="navbar--item"><a href="#">Danh bạ</a></div>
                                  <div className="navbar--item"><a href="#">Tài nguyên</a></div>
                                  <div className="navbar--item"><a href="#">Hỏi đáp</a></div>
                                </div>
                              </div>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="m1-menu_mobile__items d-flex align-items-center">
                      <div className="m1-menu--item dropdown dropdown__menu-tool">
                        <div className="dropdown-toggle" data-toggle="dropdown"><img className="img_menu" src="../../assets/img/Group 1.png" alt="" /></div>
                        <div className="dropdown-menu menu-tool">
                          <div className="dropdown-item"><a href="#"><img src="../../assets/img/Group 1569.png" alt="" /><span className="menu-tool--text">
                                Tính toán khoản
                                vay</span></a></div>
                          <div className="dropdown-item"><a href="#"><img src="../../assets/img/baseline-insert_chart-24px.png" alt="" /><span className="menu-tool--text">Tính toán hiệu quả dự án</span></a></div>
                          <div className="dropdown-item"><a href="#"><img src="../../assets/img/baseline-monetization_on-24px.png" alt="" /><span className="menu-tool--text">Tài chính cá nhân</span></a></div>
                        </div>
                      </div>
                      <div className="m1-menu--item">
                        <div className="menu-notify"><a href="#"><img src="../../assets/img/Group 22.png" alt="" /></a></div>
                      </div>
                      <div className="m1-menu--item"><a className="btn-login" href="/dang-nhap"><img src="../../assets/img/icon-avatar.png" alt="" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="homepage-body" id="m1-body">
                <div className="m1-body__container h-100">
                  <div className="m1-body__content h-100 d-flex flex-column justify-content-center">
                    <div className="map-mobile d-flex flex-column align-items-center"><img src="../../../assets/img/baseline-mobile.png" alt="" /><span className="map-mobile-off">Mobile off</span><span className="map-mobile--notify">Hãy trải nghiệm chức năng này trên desktop</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        );
    }
}

export default MobileDisplay;