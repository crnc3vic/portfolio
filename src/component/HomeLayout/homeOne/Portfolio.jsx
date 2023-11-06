import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import { Link } from "react-router-dom";
import content from "../../../Content.json";

class Portfolio extends Component {
    render() {
        let title = content.portfolio.title,
          description = content.portfolio.description
          
        const uniquePortfolioList = [...new Set(Object.values(content.portfolio.list))];
      
        const portfolioList = uniquePortfolioList.slice(0, 14).map((item, index) => (
          <div className="portfolio" key={index}>
            <div className="thumbnail-inner">
              <div className={`thumbnail ${item.image}`} />
              <div className={`bg-blr-image ${item.image}`} />
            </div>
            <div className="content">
              <div className="inner">
                <p>{item.category}</p>
                <h4 className="title">
                  <a href="/portfolio-details">{item.title}</a>
                </h4>
                <div className="portfolio-button">
                  <a className="rn-btn" href="/portfolio-details">
                    Case Study
                  </a>
                </div>
              </div>
            </div>
            <Link className="link-overlay" to="/portfolio-details"></Link>
          </div>
        ));
      
        return (
          <React.Fragment>
            <div className="portfolio-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="section-title">
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-slick-activation mt--70 mt_sm--40">
                <Slider {...portfolioSlick2}>{portfolioList}</Slider>
              </div>
            </div>
          </React.Fragment>
        );
      }
      
      
}
export default Portfolio;
