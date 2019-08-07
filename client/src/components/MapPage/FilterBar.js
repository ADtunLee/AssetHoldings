import React, { Component } from 'react';

class FilterBar extends Component {
    render() {
        return (
            <div className="h-100" id="filterBar">
            <div className="filterBar__container">
              <div className="filterbar__content">
                <div className="w-100 filterBar__top d-flex justify-content-between">
                  <div className="filterBar__top--additional">
                    <div className="top-additional">
                      <div className="top-additional__container">
                        <div className="top-additional__content">
                          <div className="row">
                            {/* Filter Type*/}
                            <div className="top-additional--filter filter-type" id="filterType">
                              <div className="filter__content d-flex align-items-center">
                                <div className="filter--text filter-type--text" id="filter-type">Dự án</div>
                                <div className="filter-type--switch d-flex align-items-center">
                                  <div className="btn-switch">
                                    <div className="btn-switch__container">
                                      <div className="btn-switch__content d-flex align-items-center">
                                        <input id="filter__switch-type" type="checkbox" defaultChecked data-toggle="toggle" data-on="Dự án" data-off="BĐS" data-style="btn-switch__input" data-width={49} data-height={18} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* FILTERS FOR PROJECT*/}
                            <div className="d-flex filters-project show" id="filters-project">
                              {/* Filter Category*/}
                              <div className="top-additional--filter filter-category filter-options-total" id="filterCategory" data-title="Loại dự án">
                                <div className="d-flex align-items-center filter__content">
                                  <div className="dropdown-toggle d-flex text-center" data-toggle="dropdown"><span className="filter--text filter-category--text" style={{maxWidth: '87.36px'}}>Loại dự án</span></div>
                                  <div className="dropdown-menu">
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-apartment" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-apartment">Chung Cư</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-city" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-city">Đô thị</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-resort" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-resort">Nghỉ dưỡng</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Filter Price*/}
                              <div className="top-additional--filter filter-price" id="filterPrice">
                                <div className="d-flex align-items-center filter__content">
                                  <div className="dropdown-toggle d-flex" data-toggle="dropdown"> <span className="filter--text filter-category--text text-center" style={{maxWidth: '110px'}}>Mức giá</span></div>
                                  <div className="dropdown-menu">
                                    <div className="row pricelist-range__container">
                                      <div className="col-6 pricelist-range">
                                        <input className="form-control input-price-min" type="text" placeholder="Min" />
                                        <div className="menu-price__min min-options">
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={5}>
                                            <div className="dropdown-item__content"><span>5 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={10}>
                                            <div className="dropdown-item__content"><span>10 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={15}>
                                            <div className="dropdown-item__content"><span>15 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={20}>
                                            <div className="dropdown-item__content"><span>20 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={25}>
                                            <div className="dropdown-item__content"><span>25 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={30}>
                                            <div className="dropdown-item__content"><span>30 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={35}>
                                            <div className="dropdown-item__content"><span>35 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={40}>
                                            <div className="dropdown-item__content"><span>40 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={45}>
                                            <div className="dropdown-item__content"><span>45 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={50}>
                                            <div className="dropdown-item__content"><span>50 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={55}>
                                            <div className="dropdown-item__content"><span>55 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={60}>
                                            <div className="dropdown-item__content"><span>60 triệu</span></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-6 pricelist-range">
                                        <input className="form-control input-price-max" type="text" placeholder="Max" />
                                        <div className="menu-price__max max-options">
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={5}>
                                            <div className="dropdown-item__content"><span>5 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={10}>
                                            <div className="dropdown-item__content"><span>10 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={15}>
                                            <div className="dropdown-item__content"><span>15 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={20}>
                                            <div className="dropdown-item__content"><span>20 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={25}>
                                            <div className="dropdown-item__content"><span>25 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={30}>
                                            <div className="dropdown-item__content"><span>30 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={35}>
                                            <div className="dropdown-item__content"><span>35 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={40}>
                                            <div className="dropdown-item__content"><span>40 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={45}>
                                            <div className="dropdown-item__content"><span>45 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={50}>
                                            <div className="dropdown-item__content"><span>50 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={55}>
                                            <div className="dropdown-item__content"><span>55 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={60}>
                                            <div className="dropdown-item__content"><span>60 triệu</span></div>
                                          </div>
                                          <div className="dropdown-item" tabIndex={-1}>
                                            <div className="dropdown-item__content"><span>Bất kỳ</span></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Filter Status*/}
                              <div className="top-additional--filter filter-status filter-options-radio" id="filterStatus" data-title="Tình trạng">
                                <div className="d-flex align-items-center filter__content">
                                  <div className="dropdown-toggle filter--text filter-status--text text--center" data-toggle="dropdown" style={{maxWidth: '88.5px'}}>Tình trạng</div>
                                  <div className="dropdown-menu">
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-inprogress" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-inprogress">Đang làm</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-done" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-done">Đã bàn giao</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-waiting" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-waiting">Chưa làm</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Filter Invesment*/}
                              <div className="top-additional--filter filter-invesment" id="filterInvesment">
                                <div className="d-flex align-items-center filter__content">
                                  <div className="dropdown-toggle d-flex text--center" data-toggle="dropdown"><span className="filter--text filter-category--text" style={{maxWidth: '100px'}}>Chủ đầu tư</span></div>
                                  <div className="dropdown-menu">
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content">
                                        <input type="text" placeholder="Ex: Thắng lợi group" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Filter More*/}
                              <div className="top-additional--filter filter-more filter-options-count" id="filterMore" data-title="Thêm" data-option-count={0}>
                                <div className="d-flex align-items-center filter__content">
                                  <div className="dropdown-toggle filter--text filter-more--text text--center" data-toggle="dropdown">Thêm</div>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content">
                                        <div className="handover-time">
                                          <div className="dropdown-item--title handover-time--title">Thời gian bàn giao</div>
                                          <div className="d-flex checkbox-radio-area">
                                            <div className="handover-time--input-date">
                                              <input className="filter-input-count w-100" type="text" placeholder="dd/mm/yyyy" />
                                            </div>
                                            <div className="form-check handover-time--checkbox-before">
                                              <input className="form-check-input" id="dropdownCheck-before" type="checkbox" />
                                              <label className="form-check-label" htmlFor="dropdownCheck-before">Trước</label>
                                            </div>
                                            <div className="form-check handover-time--checkbox-after">
                                              <input className="form-check-input" id="dropdownCheck-after" type="checkbox" />
                                              <label className="form-check-label" htmlFor="dropdownCheck-after">Sau</label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content">
                                        <div className="category-info">
                                          <div className="dropdown-item--title category-info--title">Loại chi tiết</div>
                                          <div className="d-flex" role="menu">
                                            <select className="filter-input-count category-info__select custom-select" id="selectCategoryInfo">
                                              <option value selected>Vui lòng chọn</option>
                                              <option value={1}>Không có khối đế</option>
                                              <option value={2}>Hướng ngoại</option>
                                              <option value={3}>Không phân loại</option>
                                              <option value={4}>Có khối đế</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content">
                                        <div className="filter-more__tags">
                                          <div className="dropdown-item--title category-info--title">Từ khoá</div>
                                          <div className="d-flex">
                                            <input className="filter-input-count" type="text" data-role="tagsinput" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* END FILTERS FOR PROPERTIES*/}
                            {/* FILTER FOR PROPERTIES*/}
                            <div className="d-flex filters-properties" id="filters-properties">
                              {/* Filter Trading*/}
                              <div className="top-additional--filter filter-trading filter-options-total" id="filterTrading" data-title="Loại giao dịch">
                                <div className="filter__content d-flex align-items-center">
                                  <div className="filter-add-icon dropdown-toggle d-flex align-items-center" id="filterTradingList" data-toggle="dropdown" style={{maxWidth: '120px'}}><span className="trading-icon icon-for-sale" /><span className="trading-icon icon-for-rent" /><span className="trading-icon icon-for-sold" /><span className="filter--text filter-trading--text" style={{maxWidth: '108.7px'}}>Loại giao dịch</span></div>
                                  <div className="dropdown-menu">
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-sale" type="checkbox" data-trading="sale" />
                                          <div className="form-check-icon" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-sale">BĐS Bán</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-rent" type="checkbox" data-trading="rent" />
                                          <div className="form-check-icon form-check-rent" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-rent">BĐS Thuê</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-sold" type="checkbox" data-trading="sold" />
                                          <div className="form-check-icon form-check-sold" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-sold">Đã bán</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Filter Price*/}
                              <div className="top-additional--filter filter-price" id="filterPrice">
                                <div className="d-flex align-items-center filter__content">
                                  <div className="dropdown-toggle filter--text filter-price--text text--center" data-toggle="dropdown">Mức giá</div>
                                  <div className="dropdown-menu">
                                    <div className="row pricelist-range__container">
                                      <div className="col-6 pricelist-range">
                                        <input className="form-control input-price-min" type="text" placeholder="Min" />
                                        <div className="menu-price__min min-options">
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={5}>
                                            <div className="dropdown-item__content"><span>5 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={10}>
                                            <div className="dropdown-item__content"><span>10 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={15}>
                                            <div className="dropdown-item__content"><span>15 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={20}>
                                            <div className="dropdown-item__content"><span>20 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={25}>
                                            <div className="dropdown-item__content"><span>25 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={30}>
                                            <div className="dropdown-item__content"><span>30 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={35}>
                                            <div className="dropdown-item__content"><span>35 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={40}>
                                            <div className="dropdown-item__content"><span>40 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={45}>
                                            <div className="dropdown-item__content"><span>45 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={50}>
                                            <div className="dropdown-item__content"><span>50 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={55}>
                                            <div className="dropdown-item__content"><span>55 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={60}>
                                            <div className="dropdown-item__content"><span>60 triệu</span></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-6 pricelist-range">
                                        <input className="form-control input-price-max" type="text" placeholder="Max" />
                                        <div className="menu-price__max max-options">
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={5}>
                                            <div className="dropdown-item__content"><span>5 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={10}>
                                            <div className="dropdown-item__content"><span>10 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={15}>
                                            <div className="dropdown-item__content"><span>15 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={20}>
                                            <div className="dropdown-item__content"><span>20 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={25}>
                                            <div className="dropdown-item__content"><span>25 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={30}>
                                            <div className="dropdown-item__content"><span>30 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={35}>
                                            <div className="dropdown-item__content"><span>35 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={40}>
                                            <div className="dropdown-item__content"><span>40 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={45}>
                                            <div className="dropdown-item__content"><span>45 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={50}>
                                            <div className="dropdown-item__content"><span>50 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={55}>
                                            <div className="dropdown-item__content"><span>55 triệu</span></div>
                                          </div>
                                          {/* Dropdown item*/}
                                          <div className="dropdown-item" tabIndex={60}>
                                            <div className="dropdown-item__content"><span>60 triệu</span></div>
                                          </div>
                                          <div className="dropdown-item" tabIndex={-1}>
                                            <div className="dropdown-item__content"><span>Bất kỳ</span></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Filter Rooms*/}
                              <div className="top-additional--filter filter-room filter-options-radio" id="filterRoom" data-title="Tình trạng">
                                <div className="d-flex align-items-center filter__content">
                                  <div className="dropdown-toggle d-flex text-center" data-toggle="dropdown"><span className="filter--text filter-room--text" style={{maxWidth: '84.9px'}}>Tình trạng</span></div>
                                  <div className="dropdown-menu">
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-room-0" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-room-0">0 +</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-room-1" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-room-1">1 +</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-room-2" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-room-2">2 +</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-room-3" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-room-3">3 +</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-room-4" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-room-4">4 +</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-room-5" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-room-5">5 +</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Filter Properties type*/}
                              <div className="top-additional--filter filter-protype filter-options-total" id="filterProtype" data-title="Loại bất động sản">
                                <div className="d-flex align-items-center filter__content">
                                  <div className="dropdown-toggle d-flex" data-toggle="dropdown"><span className="filter--text filter-protype--text text-center" style={{maxWidth: '133.5px'}}>Loại bất động sản</span></div>
                                  <div className="dropdown-menu">
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-pro-apartment" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-pro-apartment">Căn hộ chung cư</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-officetel" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-officetel">Officetel</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-shophouse" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-shophouse">Shop house</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-house" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-house">Nhà riêng</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-cityhouse" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-cityhouse">Nhà phố liền kề</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-villa" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-villa">Biệt thự</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-condotel" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-condotel">Condotel</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-resort" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-resort">Biệt thự nghỉ dưỡng</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-bungalow" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-bungalow">Bungalow</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-land" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-land">Đất nền/ Đất dự án</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-official" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-official">Toà nhà văn phòng</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-hotel" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-hotel">Khách sạn</label>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content input-group">
                                        <div className="form-check dropdown-item--checkbox">
                                          <input className="form-check-input" id="dropdownCheck-mall" type="checkbox" />
                                          <label className="form-check-label" htmlFor="dropdownCheck-mall">Trung tâm thương mại</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Filter More*/}
                              <div className="top-additional--filter filter-more filter-options-count" id="filterMore" data-title="Thêm" data-option-count={0}>
                                <div className="d-flex align-items-center filter__content">
                                  <div className="dropdown-toggle filter--text filter-more--text text--center" data-toggle="dropdown">Thêm</div>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content">
                                        <div className="land-square">
                                          <div className="dropdown-item--title land-square--title">Diện tích đất</div>
                                          <div className="d-flex">
                                            <div className="form-group w-100 d-flex align-items-center">
                                              <input className="filter-input-count form-control-range" id="landSquare" type="range" defaultValue={0} min={0} max={150} step={1} />
                                              <label className="form-control-range-label" htmlFor="landSquare">
                                                0+
                                                m²
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content">
                                        <div className="land-usable">
                                          <div className="dropdown-item--title land-usable--title">Diện sử dụng</div>
                                          <div className="d-flex">
                                            <div className="form-group w-100 d-flex align-items-center">
                                              <input className="filter-input-count form-control-range" id="landUsable" type="range" defaultValue={0} min={0} max={150} step={1} />
                                              <label className="form-control-range-label" htmlFor="landUsable">
                                                0+
                                                m²
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content">
                                        <div className="land-size">
                                          <div className="land-size__container d-flex">
                                            <div className="w-50 land-size__width">
                                              <div className="dropdown-item--title land-size--title">Chiều ngang</div>
                                              <div className="d-flex">
                                                <div className="form-group w-100 d-flex align-items-center">
                                                  <input className="filter-input-count form-control" id="landSizeWidth" type="text" placeholder="Ex: 8m" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="w-50 land-size__long">
                                              <div className="dropdown-item--title land-size--title text-right">Chiều dọc</div>
                                              <div className="d-flex">
                                                <div className="form-group w-100 d-flex align-items-center justify-content-end">
                                                  <input className="filter-input-count form-control" id="landSizeLong" type="text" placeholder="Ex: 8m" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content">
                                        <div className="house-info">
                                          <div className="house-info__container d-flex justify-content-between">
                                            <div className="w-30 house-bathroom">
                                              <div className="dropdown-item--title house-info--title">Phòng tắm</div>
                                              <div className="d-flex">
                                                <div className="form-group w-100 d-flex align-items-center">
                                                  <input className="filter-input-count form-control" id="houseBathroom" type="number" defaultValue={0} />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="w-30 house-floor">
                                              <div className="dropdown-item--title house-info--title">Số tầng</div>
                                              <div className="d-flex">
                                                <div className="form-group w-100 d-flex align-items-center">
                                                  <input className="filter-input-count form-control" id="houseFloor" type="number" defaultValue={0} />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="w-30 house-onroad">
                                              <div className="dropdown-item--title house-info--title">Mặt tiền</div>
                                              <input className="filter-input-count form-control" id="houseOnroad" type="checkbox" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content">
                                        <div className="house-position">
                                          <div className="house-position__container">
                                            <div className="dropdown-item--title house-position--title">Hướng</div>
                                            <div className="house-position__content d-flex flex-wrap align-items-center justify-content-between">
                                              <div className="d-flex w-25">
                                                <input className="filter-input-count form-control" id="housePositionEast" type="checkbox" />
                                                <label className="form-check-label" htmlFor="housePositionEast">Đông</label>
                                              </div>
                                              <div className="d-flex w-25">
                                                <input className="filter-input-count form-control" id="housePositionWest" type="checkbox" />
                                                <label className="form-check-label" htmlFor="housePositionWest">Tây</label>
                                              </div>
                                              <div className="d-flex w-25">
                                                <input className="filter-input-count form-control" id="housePositionSouth" type="checkbox" />
                                                <label className="form-check-label" htmlFor="housePositionSouth">Nam</label>
                                              </div>
                                              <div className="d-flex w-25">
                                                <input className="filter-input-count form-control" id="housePositionNorth" type="checkbox" />
                                                <label className="form-check-label" htmlFor="housePositionNorth">Bắc</label>
                                              </div>
                                              <div className="d-flex w-25">
                                                <input className="filter-input-count form-control" id="housePositionEastNorth" type="checkbox" />
                                                <label className="form-check-label" htmlFor="housePositionEastNorth">
                                                  Đông
                                                  Bắc
                                                </label>
                                              </div>
                                              <div className="d-flex w-25">
                                                <input className="filter-input-count form-control" id="housePositionWestNorth" type="checkbox" />
                                                <label className="form-check-label" htmlFor="housePositionWestNorth">
                                                  Tây
                                                  Bắc
                                                </label>
                                              </div>
                                              <div className="d-flex w-25">
                                                <input className="filter-input-count form-control" id="housePositionEastSouth" type="checkbox" />
                                                <label className="form-check-label" htmlFor="housePositionEastSouth">
                                                  Đông
                                                  Nam
                                                </label>
                                              </div>
                                              <div className="d-flex w-25">
                                                <input className="filter-input-count form-control" id="housePositionWestSouth" type="checkbox" />
                                                <label className="form-check-label" htmlFor="housePositionWestSouth">
                                                  Tây
                                                  Nam
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* dropdown item*/}
                                    <div className="dropdown-item">
                                      <div className="dropdown-item__content">
                                        <div className="filter-more__tags">
                                          <div className="dropdown-item--title category-info--title">Từ khoá</div>
                                          <div className="d-flex">
                                            <input className="filter-input-count" type="text" data-role="tagsinput" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* END FILTER FOR PROPERTIES*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* FILTERS MAP MODE*/}
                  <div className="filterBar__top--map-mode">
                    <div className="map-mode">
                      <div className="map-mode__container">
                        <div className="map-mode__content">
                          <div className="map-mode">
                            <div className="row mode__content">
                              <div className="select-mode mode-display">Bản đồ</div>
                              <div className="select-mode mode-satellite">Vệ tinh</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-100 filterBar__share">
                  <div className="share_content d-flex justify-content-end">
                    <div className="share--btn"><img src="../../../assets/img/ic-share-black.png" alt="" /></div>
                  </div>
                </div>
                <div className="filterBar__view">
                  <div className="street-view">
                    <div className="street-view__container">
                      <div className="street-view__content">
                        <div className="street-view--item outline-location">
                          <div className="street-view--btn outline-location__content"><img src="../../../assets/img/outline-location.png" alt="" /></div>
                        </div>
                        <div className="street-view--item baseline-view">
                          <div className="street-view--btn baseline-view__content"><img src="../../../assets/img/baseline-view.png" alt="" /></div>
                        </div>
                        <div className="street-view--item road-perspective">
                          <div className="street-view--btn road-perspective__content"><span className="fa fa-road icon" /></div>
                        </div>
                        <div className="street-view--item baseline-trip">
                          <div className="street-view--btn baseline-trip__content"><img src="../../../assets/img/baseline-trip.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        );
    }
}

export default FilterBar;