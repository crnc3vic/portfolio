import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import content from "../../Content.json";

const SocialShare = [
    {Social: <FaFacebookF /> , link: content.social.facebook},
    {Social: <FaLinkedinIn /> , link: content.social.linkedin},
    {Social: <FaInstagram /> , link: content.social.instagram},
    {Social: <FaTwitter /> , link: content.social.twitter},
]

const currentYear = new Date().getFullYear();
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>{content.footer.smallHeader}</span>
                                        <h2>{content.footer.bigHeader}</h2>
                                        <a className="rn-button-style--2" href="/contact">
                                            <span>{content.footer.contactButton}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>{content.footer.columns.first.title}</h4>
                                                <ul className="ft-link">
                                                    <li><a href="/portfolio">{content.footer.columns.first.work}</a></li>
                                                    <li><a href="/about">{content.footer.columns.first.about}</a></li>
                                                    <li><a href="/contact">{content.footer.columns.first.contact}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>{content.footer.columns.second.title}</h4>
                                                <ul className="ft-link">
                                                <li><a href={`mailto:${content.footer.columns.second.email}`}>{content.footer.columns.second.email}</a></li>
                                                <li><a href={`tel:${content.footer.columns.second.phone}`}>{content.footer.columns.second.phone}</a></li>
``                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright © {currentYear} {content.homepage.title} All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;