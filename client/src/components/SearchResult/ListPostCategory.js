import React, { Component } from 'react';
import {connect } from 'react-redux'
class ListPostCategory extends Component {
    render() {
        var showPostCategory = (
            this.props.listPostCategory.map((postCategory, index) => {
               
                return (
                    <div className="sr-category__dropdown-item" key={index}>
                        <a className="dropdown-toggle" href={`/ket-qua/tin-tuc/${postCategory.url_name}-${postCategory.sequence}`} role="button" id="abc"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {postCategory.name}
                        </a>

                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="abc">
                            {postCategory.children.map((postCategory_child, index) => {
                                return (
                                    <a key={index} className="dropdown-item" href={`/ket-qua/danh-muc-tin-tuc/${postCategory_child.url_name}-${parseInt(postCategory_child.sequence)}`}>{postCategory_child.name}</a>
                                )
                            })}
                        </div>
                    </div>
                )
            })
        )
        return (
            <div className="result-pages__header-category">
                <div className="rs-header-category header-category__container">
                  <div className="search-result__category">
                    <div className="sr-category__container">
                      <div className="sr-category__dropdown-items dropdown d-flex align-items-center">
                       {showPostCategory}
                      </div>
                    </div>
                  </div>
                  <div className="search-result__header-text"><span>Khoảng <span className="fw-5">1.782</span> kết quả</span></div>
                </div>
              </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        listPostCategory: state.postReducers.listPostCategory
    }
}

export default connect(mapStateToProps,null)(ListPostCategory);