import React, { Component } from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from 'react-scrollspy';
import content from "../../Content.json";

const SocialShare = [
    {Social: <FaFacebookF /> , link: content.social.facebook},
    {Social: <FaLinkedinIn /> , link: content.social.linkedin},
    {Social: <FaInstagram /> , link: content.social.instagram},
    {Social: <FaTwitter /> , link: content.social.twitter},
]

class HeaderThree extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);
        this.smoothScroll = this.smoothScroll.bind(this); // Binding the smoothScroll method

        window.addEventListener('load', function () {
            console.log('All assets are loaded');
        });
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open');
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }

    stickyHeader() {}

    smoothScroll(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop - 70; // Adjust the offset top value if needed for any fixed header height

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    render() {
        // Sticky header handler
        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky');
            } else {
                document.querySelector('.header--fixed').classList.remove('sticky');
            }
        });

        const { logo, color = 'default-color', homeLink } = this.props;
        let logoUrl;

        // Determine which logo to use based on props
        switch (logo) {
            case 'light':
                logoUrl = <img src={content.logoLight} width="140" alt={content.name} style={{height: "auto"}} />;
                break;
            case 'dark':
                logoUrl = <img src={content.logoLight} width="140" alt={content.name} style={{height: "auto"}} />;
                break;
            case 'symbol-dark':
                logoUrl = <img src={content.logoDark} width="140" alt={content.name} style={{height: "auto"}} />;
                break;
            case 'symbol-light':
                logoUrl = <img src={content.logoLight} width="140" alt={content.name} style={{height: "auto"}} />;
                break;
            default:
                logoUrl = <img src={content.logoLight} width="140" alt={content.name} style={{height: "auto"}} />;
                break;
        }

        return (
            <header className={`header-area header-style-two header--fixed ${color}`}>
                <div className="header-wrapper">
                    {/* Logo */}
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href={homeLink}>
                                {logoUrl}
                            </a>
                        </div>

                        {/* Main Navigation */}
                        <nav className="mainmenunav d-lg-block ml--50">
                            <Scrollspy className="mainmenu" items={['home', 'about', 'service', 'portfolio', 'blog', 'contact']} currentClassName="is-current" offset={-200}>
                                <li><a href="#home" onClick={this.smoothScroll}>Home</a></li>
                                <li><a href="#about" onClick={this.smoothScroll}>About</a></li>
                                <li><a href="#service" onClick={this.smoothScroll}>Service</a></li>
                                <li><a href="#portfolio" onClick={this.smoothScroll}>Portfolio</a></li>
                                <li><a href="#blog" onClick={this.smoothScroll}>Blog</a></li>
                                <li><a href="#contact" onClick={this.smoothScroll}>Contact</a></li>
                            </Scrollspy>
                        </nav>
                    </div>

                    {/* Right Side Content */}
                    <div className="header-right">
                        {/* Social Icons */}
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val, i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Call to Action Button */}
                        <div className="header-btn">
                            <a className="rn-btn" href={content.orderButtonLink}>
                                <span>{content.orderButton}</span>
                            </a>
                        </div>

                        {/* Hamburger Menu for Mobile */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>

                        {/* Close Menu for Mobile */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderThree;
