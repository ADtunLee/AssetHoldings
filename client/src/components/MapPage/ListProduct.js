import React, { Component } from 'react';
import ProductItem from '../MapPage/ProductItem'

class ListProduct extends Component {
    render() {
        return (
            <React.Fragment>
                  <div className="search-filter-container ml-2">
                      <div className="dropdown">
                        <button className="btn dropdown-toggle search-filter--btn" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sắp xếp theo</button>
                        <div className="dropdown-menu py-2" aria-labelledby="dropdownMenuButton">
                          <div className="dropdown-item px-2 py-2">Action</div>
                          <div className="dropdown-item px-2 py-2">Another action</div>
                          <div className="dropdown-item px-2 py-2">Something else here</div>
                        </div>
                      </div>
                    </div>
                    <div className="search-result-container">
                        <ProductItem />
                        <ProductItem />

                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        
                     </div>
                
            </React.Fragment>
        );
    }
}

export default ListProduct;