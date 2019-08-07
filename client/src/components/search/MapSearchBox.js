import React, { Component } from "react";

class MapSearchBox extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="search-input">
          <div>
            <input
              className="form-control"
              id="autoComplete"
              type="text"
              placeholder="Search ..."
              tabIndex={1}
            />
          </div>
        </div>
        <div className="search-icon">
          <img src="../../../assets/img/SVG/search.svg" alt="" />
        </div>
      </React.Fragment>
    );
  }
}

export default MapSearchBox;
