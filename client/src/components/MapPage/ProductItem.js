import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div className="search-result__item active">
                        <div className="row item-container">
                          <div className="col-4 item-image" style={{backgroundImage: 'url("../../../assets/img/house-thumb.jpg")'}}>
                            <div className="sr-item__favorite"><img src="../../../assets/img/icon-favorite.png" alt="" /></div>
                            <div className="sr-item__non-favorite"><img src="../../../assets/img/icon-non-favorite.png" alt="" /></div>
                          </div>
                          <div className="col-8 item-details">
                            <div className="row item-price">
                              <p className="border-right price">7,5 triệu</p>
                              <p className="border-right acreage">60,78m2</p>
                              <p className="ratio">10 x 6,8m</p>
                            </div>
                            <div className="item-type">
                              <p>CĂN HỘ CHUNG CƯ</p>
                            </div>
                            <div className="row item-info">
                              <p className="border-right">Thuê</p>
                              <p className="border-right">Số tờ 30</p>
                              <p>Số thửa - -</p>
                            </div>
                            <div className="row item-detail">
                              <p><img src="../../../assets/img/SVG/bed.svg" alt="" /> 10</p>
                              <p><img src="../../../assets/img/SVG/shower.svg" alt="" /> 20</p>
                              <p><img src="../../../assets/img/SVG/direction.svg" alt="" /> Đông Nam</p>
                            </div>
                          </div>
                        </div>
                      </div>
        );
    }
}

export default ProductItem;