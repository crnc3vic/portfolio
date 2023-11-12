import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import {Link} from "react-router-dom";

import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import SliderOne from "../component/slider/SliderOne";
import ServiceTwo from "../elements/service/ServiceTwo";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import About from "../component/HomeLayout/homeOne/About";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import Helmet from "../component/common/Helmet";
import content from "../Content.json";

const portfolioList = Object.values(content.portfolio.list);
class MainDemo extends Component{
    render(){
        
        const PostList = BlogContent.slice(0 , 3);
        return(
            <Fragment> 
                <Helmet pageTitle="Main Demo" />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <SliderOne />
                </div>
                {/* End Slider Area   */}
                
                {/* Start About Area */}
                <div className="about-area about-position-top pb--120">
                    <About />
                </div>
                {/* End About Area */}

                <div className="service-area ptb--80  bg_image bg_image--3">
                   <div className="container">
                        <ServiceTwo />
                   </div>
                </div>

                <div className="portfolio-area pt--120 pb--140 bg_color--1" id="portfolio">
            <div className="rn-slick-dot">
                <div className="container">
                    <div className="row">
                        {/* ... Section Title ... */}
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slick-space-gutter--15 slickdot--20">
                                <Slider {...slickDot}>
                                    {portfolioList.map((value, index) => (
                                        <div className="portfolio" key={index}>
                                            <div className="thumbnail-inner">
                                                <div className={`thumbnail ${value.image}`}></div>
                                                <div className={`bg-blr-image ${value.image}`}></div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                    <div className="portfolio-button">
                                                        <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link className="link-overlay" to="/portfolio-details"></Link>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                {/* End Portfolio Area */}
                {/* Start CounterUp Area */}
                <div className="rn-counterup-area pt--25 pb--110 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">{content.counterHomepage.title}</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

               {/* Start Blog Area */}
               <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-left">
                                    <h2>{content.blog.title}</h2>
                                    <p>{content.blog.description}</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                                    <a className="btn-transparent rn-btn-dark" href="/blog"><span className="text">{content.blog.buttons.viewAllNews}</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60 mt_sm--40">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/blog-details">{content.blog.buttons.readMore}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>    
                </div>
                {/* End Blog Area */}

 {/* Start Brand Area */}
 <div className="rn-brand-area brand-separation pb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />
            </Fragment>
        )
    }
}
export default MainDemo;