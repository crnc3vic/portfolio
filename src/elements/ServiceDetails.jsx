import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Breadcrumb from "./common/Breadcrumb";
import content from "../Content.json";

class ServiceDetails extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        const { service } = content;

        // Function to render service paragraphs with alternating layout
        const renderParagraphs = () => {
            return Object.entries(service).filter(([key, _]) => key.includes('Paragraph')).map(([key, value], idx) => {
                const isEven = idx % 2 === 0;
                return (
                    <div key={idx} className="row sercice-details-content pb--80 align-items-center">
                        {isEven ? (
                            <>
                                <div className="col-lg-6 col-12">
                                    <div className="thumb">
                                        <img className="w-100" src={value.image} alt="Service Images" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="details mt_md--30 mt_sm--30">
                                        <div dangerouslySetInnerHTML={{ __html: value.column }} />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-lg-6 col-12">
                                    <div className="details mt_md--30 mt_sm--30">
                                        <div dangerouslySetInnerHTML={{ __html: value.column }} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="thumb">
                                        <img className="w-100" src={value.image} alt="Service Images" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                );
            });
        };

        return (
            <React.Fragment>
                {/* Start Pagehelmet */}
                <PageHelmet pageTitle={service.pagetitle} />
                {/* End Pagehelmet */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname={content.logoLight} />

                <Breadcrumb title={content.service.pagetitle}  image={content.service.headerBackground} />


                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        {renderParagraphs()}
                    </div>
                </div>
                {/* End Page Wrapper */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />
            </React.Fragment>
        );
    }
}
export default ServiceDetails;
