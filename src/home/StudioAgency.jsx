import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import ServiceTwo from "../elements/service/ServiceTwo";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import AboutTwo from "../component/HomeLayout/homeOne/AboutTwo";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import ModalVideo from 'react-modal-video';
import { videoTagString, VideoTag } from 'react-video-tag';
import Helmet from "../component/common/Helmet";
import content from "../Content.json";

videoTagString({ src: '/assets/images/service/video.mp4', poster: '/assets/images/bg/bg-image-24.jpg' })

const portfolioList = Object.values(content.portfolio.list);

const SlideList = [
    {
      textPosition: "text-center",
      category: "",
      title: content.name,
      description: content.description,
      buttonText: content.footer.columns.second.contact,
      buttonLink: "/contact",
    },
  ];

class StudioAgency extends Component{
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        const PostList = BlogContent.slice(0 , 3);
        return(
            <Fragment>
                <Helmet pageTitle="Studio Agency" />
                {/* Start Header Area  */}
                <Header />
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide slide-style-2 slider-video-bg d-flex align-items-center justify-content-center" key={index} data-black-overlay="6">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="video-inner">
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup theme-color" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="video-background">
                                <VideoTag autoPlay={`${true}`} muted={`${true}`} playsInline={`${true}`} loop={`${true}`}  src={`${"/assets/images/service/video.mp4"}`} poster={`${"/assets/images/bg/bg-image-24.jpg"}`} />
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}

                    
                </div>
                {/* End Slider Area   */}


            {/* Start About Area */}
            <div className="about-area ptb--120 bg_color--5" id="about">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src={content.about.image} alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{content.about.column.altTitle}</h2>
                                            <p className="description">{content.about.column.description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">{content.about.smallColumnLeft.title}</h3>
                                                    <p>{content.about.smallColumnLeft.content}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                <h3 className="title">{content.about.smallColumnRight.title}</h3>
                                                    <p>{content.about.smallColumnRight.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}


                {/* Start Service Area  */}
                <div className="service-area ptb--80  bg_image bg_image--3">
                    <div className="container">
                        <ServiceTwo />
                    </div>
                </div>
                {/* End Service Area  */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner mb--55 mb_sm--30">
                        <Portfolio />
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
                <div className="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="section-title text-left">
                                    <h2>{content.blog.title}</h2>
                                    <p>{content.blog.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
                            <div className="col-lg-12">
                                <Slider {...slickDot}>
                                    {PostList.map((value , i ) => (
                                        <div className="blog blog-style--1" key={i}>
                                            <div className="thumbnail">
                                                <a href="/blog-details">
                                                    <img src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
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
                                    ))}
                                </Slider>
                            </div>
                        </div>    
                    </div>    
                </div>
                {/* End Blog Area */}

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Footer Area  */}
                <FooterTwo />
                {/* End Footer Area  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default StudioAgency;