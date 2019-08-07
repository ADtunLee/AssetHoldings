import React, { Component } from "react";

class MarqueePost extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="hp-footer__quick-views layout-footer__quick-views d-none d-lg-flex">
          <div className="hp-footer__quick-view layout-footer--quick-view w-50">
            <marquee>
              <div className="quick-view__content">
                <span>
                  <span className="quick-view--title">Tin nhanh 1: </span> Lorem
                  Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis biben <a href="#">Xem nhanh</a>
                </span>
              </div>
            </marquee>
          </div>
          <div className="hp-footer__quick-view layout-footer--quick-view w-50">
            <marquee>
              <div className="quick-view__content">
                <span>
                  <span className="quick-view--title">Tin nhanh 2: </span> Lorem
                  Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis biben <a href="#">Xem nhanh</a>
                </span>
              </div>
            </marquee>
          </div>
        </div>
        {/* Mobile Display*/}
        <div className="hp-footer__quick-views layout-footer__quick-views d-flex d-lg-none">
          <div className="hp-footer__quick-view layout-footer--quick-view">
            <marquee>
              <div className="quick-view__content d-inline-flex">
                <span>
                  <span className="quick-view--title">Tin nhanh 1: </span> Lorem
                  Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis biben <a href="#">Xem nhanh</a>
                </span>
              </div>
              <div className="quick-view__content d-inline-flex">
                <span>
                  <span className="quick-view--title">Tin nhanh 2: </span> Lorem
                  Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis biben <a href="#">Xem nhanh</a>
                </span>
              </div>
            </marquee>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MarqueePost;
