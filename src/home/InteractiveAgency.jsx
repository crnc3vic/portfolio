import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Helmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";

import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import VideoModal from "../blocks/VideoModal";
import BrandTwo from "../elements/BrandTwo";
import content from "../Content.json";




const SlideList = [
    {
        textPosition: 'text-left',
        bgImage: content.interActiveAgencyBackground,
        category: content.description,
        title: content.name,
        description: '',
        buttonText: content.footer.columns.second.contact,
        buttonLink: '/contact'
    },
   
]


const InteractiveAgency = () => {
    return (
        <>
            <Helmet pageTitle={content.name} />
            <Header />
            
            {/* Start Slider Area   */}
            <div className="slider-wrapper">
                <div className="slider-activation">
                    {SlideList.map((value , index) => (
                        <div className={`slide slide-style-2 d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* End Slider Area   */}

            {/* Start About Area  */}
            <div className="rn-about-area ptb--120 bg_color--1">
                <div className="rn-about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-7">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{content.about.column.altTitle}</h2>
                                        <p className="description">{content.about.column.description}</p>
                                    </div>
                                    <div className="row mt--30">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">{content.about.column.subTitle}</h3>
                                                <div className="rn-progress-bar progress-bar--3">
                                                    <div className="single-progress custom-color--1">
                                                        <h6 className="title">{content.about.column.whatWeDo.first.name}</h6>
                                                        <ProgressBar now={content.about.column.whatWeDo.first.pct} />
                                                        <span className="label">{content.about.column.whatWeDo.first.pct}%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--2">
                                                    <h6 className="title">{content.about.column.whatWeDo.second.name}</h6>
                                                        <ProgressBar now={content.about.column.whatWeDo.second.pct} />
                                                        <span className="label">{content.about.column.whatWeDo.second.pct}%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--3">
                                                    <h6 className="title">{content.about.column.whatWeDo.third.name}</h6>
                                                        <ProgressBar now={content.about.column.whatWeDo.third.pct} />
                                                        <span className="label">{content.about.column.whatWeDo.third.pct}%</span>
                                                    </div>

                                                    <div className="single-progress custom-color--4">
                                                    <h6 className="title">{content.about.column.whatWeDo.fourth.name}</h6>
                                                        <ProgressBar now={content.about.column.whatWeDo.fourth.pct} />
                                                        <span className="label">{content.about.column.whatWeDo.fourth.pct}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 mt_md--40 mt_sm--40">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Area  */}

        {/* Start Service Area  */}
        <div
          className="service-area creative-service-wrapper ptb--120 bg_color--1"
          id="service"
        >
          <div className="container">
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}


            {/* Start Video Area  */}
            <div className="rn-section pb--120 bg_color--1">
                <div className="container">
                        <div className="row sercice-details-content align-items-center">
                        <div className="col-lg-12">
                            <div className="thumb position-relative">
                                <img className="w-100" src="/assets/images/bg/bg-image-26.jpg" alt="Service Images"/>
                                <VideoModal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Video Area  */}

            {/* Start Brand Area  */}
            <div className="rn-brand-area pb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <BrandTwo />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Brand Area  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <FooterTwo />
        </>
    )
}

export default InteractiveAgency
