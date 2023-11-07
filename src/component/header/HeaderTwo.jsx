import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn } from "react-icons/fa";
import { FiX , FiMenu} from "react-icons/fi";
import content from '../../Content.json'; // Make sure the path to Content.json is correct

const SocialShare = [
    {Social: <FaFacebookF /> , link: content.social.facebook},
    {Social: <FaLinkedinIn /> , link: content.social.linkedin},
    {Social: <FaInstagram /> , link: content.social.instagram},
    {Social: <FaTwitter /> , link: content.social.twitter},
]

class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }
    
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open');
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }

    render(){
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
        }

        const menuItems = content.menu.map((menu, index) => (
            <li key={index} className={menu.submenu ? 'has-droupdown' : ''}>
                <Link to={menu.link}>{menu.name}</Link>
                {menu.submenu && (
                    <ul className="submenu">
                        {menu.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}><Link to={subItem.link}>{subItem.name}</Link></li>
                        ))}
                    </ul>
                )}
            </li>
        ));

        return(
            <header className={`header-area header-style-two header--transparent ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                        <nav className="mainmenunav d-lg-block ml--50">
                            <ul className="mainmenu">
                                {menuItems}
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="header-btn">
                            <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                <span>buy now</span>
                            </a>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;
