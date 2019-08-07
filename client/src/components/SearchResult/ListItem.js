import React, { Component } from "react";
import NewItem from "../SearchResult/NewItem";
class ListItem extends Component {
  render() {
    var { listItem } = this.props;
    return (
        <div className="rp-search-result__items">
          <NewItem />
          <NewItem />
        </div>

    );
  }
}

export default ListItem;
