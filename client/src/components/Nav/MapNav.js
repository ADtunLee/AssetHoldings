import React, { Component } from 'react';

class MapNav extends Component {
    render() {
        return (
            <div className="dt-menu__drawer d-flex align-items-center">
              <div className="menu-drawer__content">
                <div className="modal fadeInRight" id="drawerToggleExternalContent" tabIndex={-1} role="dialog" data-backdrop="static" aria-labelledby="drawerToggleExternalContent" aria-hidden="true">
                  <div className="modal-content">
                    <nav className="dt-navbar">
                      <div className="dt-navbar__content">
                        <div className="btn-drawer__toggle" data-dismiss="modal"><img src="../../assets/img/icon-chevron-right.png" /></div><a className="dt-navbar--brand" href="/"><img src="../../assets/img/asset-logo.png" alt="" /></a>
                        <div className="dt-navbar__user">
                          <div className="navbar-user__content d-flex align-items-center">
                            <div className="user--avatar"><img src="../../assets/img/icon-avatar.png" alt="" /></div>
                            <div className="user--infor">
                              <div className="user-infor__content">
                                <div className="user--name">Huỳnh Thị Diệu Thương</div>
                                <div className="user--rate">
                                  <div className="user-rate__content d-flex align-items-center"><span className="user-rate__name">[Chuyên gia <span className="user-rate__level">4.5+</span></span><img className="user-rate__icon" src=" ../../../assets/img/SVG/star.svg" alt="" />]</div>
                                </div>
                              </div>
                            </div>
                            <div className="user--menu">
                              <div className="user-menu__content d-flex align-items-center">
                                <div className="menu--item dropdown dropdown-right dropdown__menu-tool">
                                  <div className="dropdown-toggle" data-toggle="dropdown"><img className="img_menu" src="../../assets/img/Group 1.png" alt="" /></div>
                                  <div className="dropdown-menu dropdown-menu-right menu-tool">
                                    <div className="dropdown-item"><a href="#"><img src="../../assets/img/Group 1569.png" alt="" /><span className="menu-tool--text">
                                          Tính toán
                                          khoản
                                          vay</span></a></div>
                                    <div className="dropdown-item"><a href="#"><img src="../../assets/img/baseline-insert_chart-24px.png" alt="" /><span className="menu-tool--text">Tính toán hiệu quả dự án</span></a></div>
                                    <div className="dropdown-item"><a href="#"><img src="../../assets/img/baseline-monetization_on-24px.png" alt="" /><span className="menu-tool--text">Tài chính cá nhân</span></a></div>
                                  </div>
                                </div>
                                <div className="menu--item">
                                  <div className="menu-notify"><a href="#"><img src="../../assets/img/Group 22.png" alt="" /></a></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dt-navbar__items"><a className="dt-navbar--item" href="/ket-qua/thong-tin">Thông tin</a><a className="dt-navbar--item" href="/ket-qua/bang-gia">Bảng giá</a><a className="dt-navbar--item" href="#">Thêm</a></div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default MapNav;