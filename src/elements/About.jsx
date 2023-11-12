import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import content from "../Content.json";

class About extends Component{
    render(){
        const { about, teamSection, social } = content;

        return(
            <React.Fragment>
                <PageHelmet pageTitle={about.bigColumn.title} />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname={content.logoLight} />
                
                {/* Start Breadcrump Area */}
                <Breadcrumb title={about.bigColumn.title}  image={content.about.headerBackground} />
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src={about.image} alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{about.bigColumn.title}</h2>
                                            <p className="description">{about.bigColumn.content}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">{about.smallColumnLeft.title}</h3>
                                                    <p>{about.smallColumnLeft.content}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">{about.smallColumnRight.title}</h3>
                                                    <p>{about.smallColumnRight.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}


                 {/* Start CounterUp Area */}
                 <div className="rn-counterup-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Finding Us Area  */}
                <div className="rn-finding-us-area rn-finding-us bg_color--1">
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient">{content.about.column2.title}</h4>
                                <p>{content.about.column2.content}</p>
                                <a className="rn-btn btn-white" href={content.about.column2.buttonUrl}>{content.about.column2.buttonTitle}</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src={content.about.column2.backgroundImage} alt={content.about.column2.metaDescription}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Finding Us Area  */}


                {/* Start Team Area  
            
                <div className="rn-team-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25">
                                    <h2 className="title">{teamSection.title}</h2>
                                    <p>{teamSection.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {teamSection.team.map((member, index) => (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="team">
                                        <div className="thumbnail">
                                            <img className="w-100" src={`/assets/images/team/team-${member.images}.jpg`} alt="Team Images"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">{member.title}</h4>
                                            <p className="designation">{member.designation}</p>
                                        </div>
                                        <ul className="social-icon">
                                            {member.socialNetwork.map((social, i) => (
                                                <li key={i}>
                                                    <a href={social.url}>
                                                        {social.icon === 'facebook' && <FaFacebookF />}
                                                        {social.icon === 'linkedin' && <FaLinkedinIn />}
                                                        {social.icon === 'twitter' && <FaTwitter />}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

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

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default About