import React, { Component } from 'react';
import MapNav from '../components/Nav/MapNav'
import  FilterBar from '../components/MapPage/FilterBar'
import MobileDisplay from '../components/MapPage/MobileDisplay'
import ChatSideBar from '../components/ChatSideBar'
import MapContainer from '../components/MapPage/MapContainer'
import ListProduct from '../components/MapPage/ListProduct'
import MapSearchBox from '../components/search/MapSearchBox'
import "../assets/stylesheets/index.css"

import "../assets/stylesheets/pages/_resultpages.css"
import "../assets/stylesheets/partials/map/filter-bar.css"
import "../assets/stylesheets/partials/map/bootstrap-tagsinput.css"
import "../assets/stylesheets/partials/chat/index.css"
import "../assets/stylesheets/pages/_home.css"
import "../assets/stylesheets/pages/_map.css"

class MapPage extends Component {
    render() {
        return (
            <div>
            <div className="container-fluid d-none d-xl-block">
              <div className="row flex-xl-nowrap">
                <div className="col-4 bd-sidebar section-map__result">
                  <div className="map-result-container">
                    <div className="w-100 input-search__content collapsed" id="autoComplete__content">
                      <div className="search-input-container d-flex align-items-center">
                        <div className="search-menu">
                          <button className="drawer-toggler" data-toggle="modal" data-target="#drawerToggleExternalContent" aria-controls="drawerToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><img src="../../../assets/img/SVG/menu.svg" alt="" /></button>
                        </div>
                        <MapSearchBox />
                      </div>
                    </div>
                    <div className="seperate border-bottom mt-4 mb-2" />
                    <ListProduct />
                  </div>
                </div>
                {/* MAP MAINT CONTENT*/}
                <main className="col-8 bd-content section-map__content" >
                  <div className="map__content h-100">
                    <div id="map_canvas" style={{width: '100%', height: '768px', paddingBottom: '10px', position: 'relative'}}>
                    <MapContainer />
                    </div>
                    {/* FILTER BAR FOR MAP*/}
                   {/* <FilterBar /> */}
                  </div>
                  {/* Map notification*/}
                  <div className="map-notification" id="map-notification">
                    <div className="map-notification__container">
                      <div className="d-flex map-notification__content justify-content-center">
                        <div className="notification--text">
                          Có quá nhiều BĐS / Dự án được tìm thấy nhưng chỉ hiển thị tối đa 500 đối tượng, zoom in bản đồ để xem
                          thêm
                        </div>
                        <div className="ml-2 notification--link">Đã hiểu</div>
                        <div className="notification--background" />
                      </div>
                    </div>
                  </div>
                  {/* Map Zoom*/}
                  <div className="map-zoom" id="map-zoom">
                    <div className="map-zoom">
                      <div className="d-flex flex-column map-zoom">
                        <div className="map-zoom--item map-zoom--in">
                          <div className="map-zoom--btn zoom-in__content"><img src="../../../assets/img/baseline-in.png" alt="" /></div>
                        </div>
                        <div className="map-zoom--item map-zoom--out">
                          <div className="map-zoom--btn zoom-out__content"><img src="../../../assets/img/baseline-out.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <MobileDisplay />
            {/* CHAT SIDEBAR*/}
            <ChatSideBar />
            {/* DRAWER BAR*/}
            <MapNav />
          </div>
        );
    }
}

export default MapPage;